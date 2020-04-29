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
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import NavBar from '../navbar/Navbar';
import CustomizedTables from '../customizedtables/CustomizedTables';
import DrawerContainer from '../drawer/DrawerContainer';
import Paper from '@material-ui/core/Paper';
import { positions,left,right } from '@material-ui/system';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Popover from '@material-ui/core/Popover';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DescriptionIcon from '@material-ui/icons/Description';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';



import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);


TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}




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

  settingButton: {
    color:"#0043ce",
  },

  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
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

  tabBar: {

    backgroundColor:'transparent',
    boxShadow:'none',
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
  tabStyle: {
      width:"100%",
  },
  tabPanelStyle: {
      backgroundColor:"#fff",
  },
  smalTabStyle: {
      border:"solid 1px #ccc",
      color: "#333",
  },
  title: {
    flexGrow: 1,
  },

  tabToolbar: {
    height:"auto",
    minHeight:"auto",
    paddingLeft:"0",
    paddingRight:"0",
  },

  contentMarginButom: {
    marginBottom:"10px",
  },

  marginRight: {
    marginRight:"10px",
  },

  textAlignRight: {
    textAlign:"right",
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

const tableData = [

  {
    id: '1',
    name: 'Design management file',
    calories: '06 Jan 2020',
    fat: '586',
    carbs: '09 Jan 2020',

  },

  {
      id: '2',
      name: 'Design management file',
      calories: '06 Jan 2020',
      fat: '586',
      carbs: '09 Jan 2020',
  },

  {
      id: '3',
      name: 'Design management file',
      calories: '06 Jan 2020',
      fat: '586',
      carbs: '09 Jan 2020',

  },

  {
      id: '4',
      name: 'Design management file',
      calories: '06 Jan 2020',
      fat: '586',
      carbs: '09 Jan 2020',
  },

  {
      id: '5',
      name: 'Design management file',
      calories: '06 Jan 2020',
      fat: '586',
      carbs: '09 Jan 2020',

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

const headerDataDocument = [
  {
    name: 'Document Name',
  },
  {
    name: 'Date Created',
  },

  {
    name: 'File size',
  },

  {
    name: 'Last Modified',
  },

];

export default function FolderDashboard() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [age, setAge] = React.useState('');
  const handleSelectChange = (event) => {
    setAge(event.target.value);
  };


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
                Design Progect Source Folder
              </Typography>

            </Box>

            <Box className={classes.boxcontainer}>
              <Typography variant="h6" >
                Created on 10 April 2020
              </Typography>
            </Box>

          </Grid>

        </Grid>


      </Grid>
      {/* End hero unit */}
      <Container  component="main">
        <Grid container spacing={5} alignItems="flex-end">
           <div className={classes.tabStyle}>
            <AppBar position="static" className={classes.tabBar} xs={12}>

              <Toolbar  className={classes.tabToolbar}>

                <Grid  item xs={10} className={classes.title}  >
                <Tabs TabIndicatorProps={{style: {background:'blue'}}}   value={value} onChange={handleChange} aria-label="simple tabs example">
                  <Tab className={classes.smalTabStyle} label={<div><DescriptionIcon /> Documents</div>}   {...a11yProps(0)} />
                  <Tab className={classes.smalTabStyle} label={<div><AssignmentIcon /> Task</div>}  {...a11yProps(1)} />
                  <Tab className={classes.smalTabStyle} label={<div><PeopleIcon /> User</div>}  {...a11yProps(2)} />

                </Tabs>
                </Grid>
                <Grid item xs={2} justify="flex-end">
                    <Button startIcon={<SettingsIcon />} className={classes.settingButton}>Setting</Button>
                </Grid>
              </Toolbar>
            </AppBar>
            <TabPanel value={value} index={0} className={classes.tabPanelStyle}>
                <Grid container className={classes.contentMarginButom}>
                      <Grid item sm={6}>
                          <FormControl className={classes.marginRight}>
                            <NativeSelect
                              id="demo-customized-select-native"
                              value={age}
                              onChange={handleSelectChange}
                              input={<BootstrapInput />}
                            >

                              <option value={10}>All Document</option>
                              <option value={10}>Ten</option>
                              <option value={20}>Twenty</option>
                              <option value={30}>Thirty</option>
                            </NativeSelect>
                          </FormControl>

                          <FormControl >
                            <NativeSelect
                              id="demo-customized-select-native2"
                              value={age}
                              onChange={handleSelectChange}
                              input={<BootstrapInput />}
                            >

                              <option value={10}>All Document</option>
                              <option value={10}>Ten</option>
                              <option value={20}>Twenty</option>
                              <option value={30}>Thirty</option>
                            </NativeSelect>
                          </FormControl>

                      </Grid>
                      <Grid justify="flex-end" item sm={6} className={classes.textAlignRight}>
                          <Button variant="contained" color="primary" >New Document</Button>
                      </Grid>
              </Grid>
              <CustomizedTables headerData={headerDataDocument} data={tableData} />
            </TabPanel>
            <TabPanel value={value} index={1} className={classes.tabPanelStyle}>
               <CustomizedTables headerData={headerDataDocument} data={tableData} />
            </TabPanel>
            <TabPanel value={value} index={2} className={classes.tabPanelStyle}>
              Item Three
            </TabPanel>
          </div>
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
