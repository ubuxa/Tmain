import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import NavBar from '../navbar/Navbar';
import DrawerContainer from '../drawer/DrawerContainer';
import Paper from '@material-ui/core/Paper';
import { positions,left,right } from '@material-ui/system';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Popover from '@material-ui/core/Popover';


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

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  root: {
    
    backgroundColor:'#fff',
  },

  navcontaine: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    paddingLeft: "23px",
    marginBottom:'10px',
  },

  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    
    backgroundColor:'#fff',
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    alignItems: 'baseline',
  },

  creation: {
    display: 'flex',
    alignItems: 'baseline',
    color: 'rgba(0,0,0,0.6)',
    marginTop: '3px',
    marginBottom: '7px',
  },

  description: {
    display: 'flex',
    alignItems: 'baseline',
    color: 'rgba(0,0,0,0.8)',
  },
  titlecontainer: {
    textAlign: 'center',
  },

  boxcontainer: {
    color: '#000',
  },
  numberOfFolderTesxt:{
    textAlign:'center',
  },
  newFolderButtonGrid:{
    paddingRight: '25px',
  },
  newFolderButton:{
    paddingRight: '20px',
    paddingLeft: '20px',
  },
  typography: {
    padding: theme.spacing(2),
  },

  footer: {
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const tiers = [
  {
    title: 'David Ross Project',
    creation: 'Created on 28 Feb 2020',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque ',
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },

  {
    title: 'David Ross Project',
    creation: 'Created on 28 Feb 2020',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque ',
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },

  {
    title: 'David Ross Project',
    creation: 'Created on 28 Feb 2020',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque ',
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },

  {
    title: 'David Ross Project',
    creation: 'Created on 28 Feb 2020',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque ',
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'David Ross Project',
    creation: 'Created on 28 Feb 2020',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque ',
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'David Ross Project',
    creation: 'Created on 28 Feb 2020',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque ',
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];
const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

export default function Folder() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar />
      
      {/* Hero unit */}
      <Grid className={classes.navcontaine} container xs={12} sm={12} md={12} component={Paper} square>
        
        
        <DrawerContainer />
        <Grid item  xs={10} sm={10} md={10} className={classes.titlecontainer}>
          <Grid item  xs={12} sm={12} md={12}>
            <Box className={classes.boxcontainer}>

              <Typography variant="h3">
                Working Project 2020
              </Typography>

            </Box>

            <Box className={classes.boxcontainer}>
              <Typography variant="h6" >
                Created on 10 April 2020
              </Typography>
            </Box>

            <Grid container>
              <Grid item xs className={classes.numberOfFolderTesxt}>
                
                <Typography component="h6" variant="h6" color="textPrimary">
                      You have 8 folders here
                    </Typography>
                    

              </Grid >

              <Grid item className={classes.newFolderButtonGrid}>
                <Button  variant="contained" color="primary"  className={classes.newFolderButton}>
                    New Folder
                  </Button>
              </Grid>
            </Grid>
                    
          </Grid>

        </Grid>
          
        
      </Grid>
      {/* End hero unit */}
      <Container maxWidth="xl" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card>
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h5" color="textPrimary">
                      {tier.title}
                    </Typography>
                    
                  </div>

                  <div className={classes.creation}>
                    <Typography component="h7" variant="h7" >
                     {tier.creation}
                    </Typography>
                    
                  </div>

                  <div className={classes.description}>
                    <Typography component="p" >
                     {tier.description}
                    </Typography>
                    
                  </div>

                </CardContent>
                <CardActions >

                 <Grid container>
              <Grid item xs>
                <Button  variant="contained" color="primary" >
                    Share Folder
                  </Button>

              </Grid>
              <Grid item>
                <Button  aria-describedby={id} variant="outlined" color="primary" endIcon={<ArrowDropDownIcon />} onClick={handleClick} >
                    Setting Folder
                  </Button>
                  <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                >
                  <Typography className={classes.typography}>Rename</Typography>
                  <Typography className={classes.typography}>Move</Typography>
                  <Typography className={classes.typography}>Copy</Typography>
                  <Typography className={classes.typography}>Delete</Typography>
                  <Typography className={classes.typography}>Request File</Typography>
                </Popover>
              </Grid>
            </Grid>


                
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}


