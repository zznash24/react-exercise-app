import { Component } from 'react';
import Grid from '@mui/material/Grid';
import StopWatch from '../components/Stopwatch';
// import CurrWorkList from '../components/CurrentWork';

class Login extends Component {



  render() {
    return <Grid container>
      <Grid item xs={12}>
        <StopWatch />
      </Grid>
      <Grid item xs={6}>
        {/* <CurrWorkList /> */}
      </Grid>
    </Grid>
  }
}

export default Login;