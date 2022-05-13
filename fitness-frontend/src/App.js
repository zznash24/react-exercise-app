import './App.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Grid from '@mui/material/Grid';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Beach Bod Ready</h1>
      </header>
      <Grid container spacing={2}>
        {/** Component for Login form */}

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
    </div>
  );
}

export default App;