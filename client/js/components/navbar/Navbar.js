import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    paddingLeft:'8px',
  },

  navcontaine: (props) => ({
    backgroundColor: props.backgroundColor,
    boxShadow: 'none',
    color: '#0043ce',
  }),

}));

export default function NavBar(props) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" className={classes.navcontaine}>
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
            File Management
          </Typography>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
