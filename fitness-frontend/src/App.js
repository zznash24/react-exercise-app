import './App.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Grid from '@mui/material/Grid';
import { Routes, Route, Link } from 'react-router-dom';
import WorkoutApp from "./components/Workout";
import StopWatch from "./components/Stopwatch";
import CurrWork from "./components/CurrentWork";

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <h1>All Shapes and Sizes</h1>
      </header>
      {/* <Grid container spacing={2}>
        
        <Grid item>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">SignUp</Link>
        </Grid>
        <Routes>
          <Route Path="/" />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>

      </Grid> */}
          <Grid>
        <WorkoutApp />
      {/*   <StopWatch /> */}
            {/* <CurrWork /> */}
          </Grid>
       
    </div>
  );
}

export default App;