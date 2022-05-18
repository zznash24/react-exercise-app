const express = require('express');

// session setup
const session = require('express-session');
const cookieParser = require('cookie-parser');

// setup bcrypt
const bcyrpt = require('bcrypt');
const saltRounds = 10;


// App Setup
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// this communicates with our database
const models = require('./models');
const user = require('./models/user');
// API Key

const fetch = require('node-fetch');

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': '5e8b9cb1f0msh09ab79c40301ed3p1d798djsnca9c961a0b9f'
    }
};

//Session secret setup
app.use(cookieParser());
app.use(
    session({
        key: 'user_sid',
        secret: 'turtles',
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: false,
            maxAge: 6000 * 600
        }
    })
);

//session checker to check for logged in users woah ok this needs to be completed
var sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        res.redirect('/dashboard');
    } else {
        next();
    }
}

//if the server goes down, we send them back to signin
app.get('/', sessionChecker, (req, res) => {
    res.redirect('sign-in');
});

// routing methods
app.route('/sign-up')
    .get(sessionChecker, async (req, res) => {
        return res.render('signup')
    }).post(async (req, res) => {
        const { email, password, name } = req.body;
        if (!email || !password || !name) {
            return res.json({ error: 'Email, password, name are required' });
        }
        bcyrpt.hash(password, saltRounds, (err, hash) => {
            models.user.create({
                email: email,
                password: hash,
                name: name,
            }).then((user) => {
                console.log(user);
                return res.status(200).json({ success: true, user_id: user.id });
            }).catch(e => {
                let errors = [];
                console.log(e)
                e.errors.forEach((error) => {
                    errors.push(error.message)
                })
                return res.status(400).json({ error: errors });
            })
        })
    })
    ;

app.route('/Login')
    .get(sessionChecker, async (req, res) => {
        res.render('login');
    })
    .post(async (req, res) => {
        const { email, password } = req.body;
        const foundUser = await models.user.findOne({ where: { useremail: email }, raw: true });
        if (!foundUser) {
            return res.json({ errors: 'invalid user email' });
        };
        bcyrpt.compare(password, foundUser.userpassword, (err, match) => {
            if (match) {
                //gets the user from the db and adds the user data to the session
                req.session.user = foundUser;
                res.json({ success: true });
            } else {
                res.json({ error: 'Incorrect Password' });
            }
        })
    })
    ;

//hook this up to a button
app.get('/logout', (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
        res.clearCookie('user_sid')
        res.redirect('/sign-in')
    } else {
        res.redirect('/sign-in')
    }
});


// Api Call
app.post('exercises', (req, res) => {
    fetch(`https://exercisedb.p.rapidapi.com/exercises/${searchByParam}/${searchTermParam}`, options)
    .then(res => res.json())
    .then(json => {
        res.json(json)
        console.log(json)
    })
    .catch(err => console.error('error:' + err));
})



// the server and port
app.listen(3001, function () {
    console.log('The app is now listening on port 3001...');
});