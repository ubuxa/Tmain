import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlineIcon from '@material-ui/icons/LockOutline';
import Typography from '@material-ui/core/Typography';
import { makeStyles,withStyles, } from '@material-ui/core/styles';
import NavBar from '../navbar/Navbar';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const CssTextField = withStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderRadius: '13px',
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor:'#fff',
  },
  image: {
    backgroundImage: 'url(../../img/signupillustration.png)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? '#fff' : '#fff',
    
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#0043ce',
    borderRadius: '2rem',
  },
  textfield: {
    borderRadius: '2rem',
  },
}));
//const label = ( <div> <span>I accept the </span> <Link to={'/terms'}>terms of use</Link> <span> and </span> <Link to={'/privacy'}>privacy policy</Link> </div> )

function onCheck(event) {
  console.log('onCheck: ', event); // always called
}
function onLinkClick(event) {
  console.log('onLinkClick'); // never called
}
const label = (
  <span>I have read and agree to the&nbsp;
    <a
      href="/terms_and_conditions"
      target="_blank"
      onClick={onLinkClick}
      
    >
      Terms and Conditions
    </a>
  </span>
)

export default function Signup() {
  const classes = useStyles();
 
  return (
      <React.Fragment>
      <NavBar backgroundColor="white" />
      <Grid container component="main" className={classes.root}>
     
      <CssBaseline />
      
      <Grid item xs={12} sm={8} md={5} component={Paper} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            

            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Your name"
              name="name"
              autoComplete="email"
              autoFocus
              
            />
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email Address"
              type="email"
              id="email"
              autoComplete="current-password"
              
            />

            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              
              
            />

            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="cpassword"
              label="Confirm Password"
              type="password"
              id="cpassword"
              
              
            />

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label = {label}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
    </Grid>
    </React.Fragment>
  );
}

   