import './App.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Grid from '@mui/material/Grid';
import { Routes, Route, Link } from 'react-router-dom';
import WorkoutApp from "./components/Workout";

// let callBackend = (e) => {
//     fetch('/exercises').then(res => res.json()).then(data => {
//       console.log(data)
//     })
//   }

function App() {

  

  return (
    <div className="App">
      <header className="App-header">
        <h1>All Shapes and Sizes</h1>
      </header>
      <Grid container spacing={2}>
        
        <Grid item>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">SignUp</Link>
        </Grid>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Grid>

      <WorkoutApp />
    </div>
  );
}

export default App;