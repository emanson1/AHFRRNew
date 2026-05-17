import React, { useState, useEffect } from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { showModal, hideModal } from '../actions/ahfrrActions';
import { connect } from 'react-redux';
import Background from '../Images/Gallery/floorpic2.png';
import CofCLogo from '../Images/CFCLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faPlus } from '@fortawesome/free-solid-svg-icons';
const tabs = {
  // 'instrument': Instruments,
  // 'settings':  Settings,
  // 'dashboard': Dashboard
}

const useStyles = makeStyles((theme) => ({
  triPane: { opacity: .75 },
  blueBar: { backgroundColor: '#003569' },
  pageClass: {
    border: '1px solid #8C92B4',
    backgroundColor: '#003569',
    padding: 20,
    [theme.breakpoints.down('sm')]: {

      padding: 10,
    },
    [theme.breakpoints.down('xs')]: {

      padding: 10,
    },


  },
  alignBottom: {

    display: 'table-cell',
    verticalAlign: 'middle',
    textAlign: 'center',
    border: '1px dotted #888',

  },
  root: {
    width: '100%',
  },

  quoteButton: {
    marginTop: 50,
    marginLeft: 30,
    marginRight: 30,
    backgroudColor: '#ffcc00',
    color: '#003569',
    fontSize: 60,
    fontWeight: 'bold',
    textShadow: '-1px 0 #8C92B4, 0 1px #8C92B4, 1px 0 #8C92B4, 0 -1px #8C92B4',
    height: '70%',
    width: '70%',
    [theme.breakpoints.down('md')]:
    {
      marginTop: 20,

      fontSize: 20,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
      marginLeft: 20,

    },
    [theme.breakpoints.down('xs')]: {
      marginTop: 2,
      fontSize: 8,
      marginLeft: -10,

    },
  },
  boxBlue: {
    backgroundColor: '#003569',
    paddingTop: 30,
    paddingBottom: 30,
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 24,
    paddingLeft: 30,
    paddingRight: 30,
    height: 81,
    width: 121

  },
  linkOffset: {
    paddingBottom: 20,
    backgroundColor: 'white',
    paddingTop: 20,
    [theme.breakpoints.down('md')]: {
      paddingTop: 0,
      paddingBottom: 10,
    },

    [theme.breakpoints.down('sm')]: {

      paddingBottom: 5,
    },
    [theme.breakpoints.down('xs')]: {
      paddingBottom: 2,

    },

  },
  linkClass: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',

    [theme.breakpoints.down('lg')]:
    {
      fontSize: 30,
    },
    [theme.breakpoints.down('md')]:
    {
      fontSize: 24,
    },
    [theme.breakpoints.down('sm')]: {
      //width: '90vw',
      fontSize: 20,
    },
    [theme.breakpoints.down('xs')]: {
      //width: '90vw',
      fontSize: 13,
    },

  },
  headingClass: {
    backgroundColor: 'white',

  },
  logoClass:
  {
    paddingTop: 30,
    paddingBottom: 30,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingTop: 10,
      paddingBottom: 10,
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: 5,
      paddingBottom: 5,
    },

  },
  copyWhite: {
    fontSize: 20,
    color: 'white',
    //fontWeight:'bold'

  },
  TitleClass: {
    paddingTop: 220,
    color: '#003569',
    textAlign: 'center',

    fontWeight: 'bold',
    textShadow: '-1px 0 #8C92B4, 0 3px #8C92B4, 1px 0 #8C92B4, 0 -1px #8C92B4',
    fontSize: 70,

    [theme.breakpoints.down('lg')]:
    {
      fontSize: 70,
    },
    [theme.breakpoints.down('md')]:
    {
      paddingTop: 95,
      fontSize: 60,
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: 70,
      fontSize: 30,
      textShadow: '-1px 0 #8C92B4, 0 1px #8C92B4, 1px 0 #8C92B4, 0 -1px #8C92B4',

    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: 15,

      fontSize: 18,
    },


  },
  panorama: {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
  },
  headingLargeContainer: {
    borderTop: '#003569 20px solid',
    borderBottom: '#003569 20px solid',
    [theme.breakpoints.down('sm')]:
    {
      borderTop: '#003569 10px solid',
      borderBottom: '#003569 10px solid',
    },
    [theme.breakpoints.down('xs')]:
    {
      borderTop: '#003569 5px solid',
      borderBottom: '#003569 5px solid',
    },

  },
  headingLarge: {
    fontSize: 65,
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    textShadow: '-1px 0 black, 0 3px black, 1px 0 black, 0 -1px black',
    [theme.breakpoints.down('lg')]:
    {
      fontSize: 50,
    },
    [theme.breakpoints.down('md')]:
    {
      fontSize: 40,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 30,
      paddingTop: 10,
      paddingBottom: 10,

    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
      paddingTop: 5,
      paddingBottom: 5,

    },
  },
  headingMedium: {
    fontSize: 45,
    fontWeight: 'bold'
  },
  darkBlueBackgroundLayer:
  {
    backgroundColor: '#145493',
    color: 'white'

  },
  whiteBackgroundLayer:
  {
    backgroundColor: 'white',
    color: '#145493'

  },
  li:
  {
    fontSize: 19
  },
  imageClass:
  {
    width: '70%',
    [theme.breakpoints.down('sm')]: {
      width: '80%',

    },

  },
  showNav:{
    display:'none',
    [theme.breakpoints.down('xs')]: {
      display:'inline',
    }

  },
  showRequest:{
    display:'inline',
    [theme.breakpoints.down('xs')]: {
      display:'none',
    }

  },
  iconSize: {

    color: '#003569',
    transform: 'scale(11.0)',
    paddingTop: 20,
    paddingRight: 10,

    [theme.breakpoints.down('lg')]:
    {
      transform: 'scale(9.0)',
      paddingRight: 12,
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: 0,
      paddingRight: 0,
      vtransform: 'scale(7.0)',
    },
    [theme.breakpoints.down('sm')]: {
      transform: 'scale(4.5)',
    },
    [theme.breakpoints.down('xs')]: {
      transform: 'scale(2.0)',
    }
  },

}));
const MainPageWrapper = props => {
  const { handleClose, handleOpen, rej, sel, instruments, setInstruments, setRej, setSel, setIsLoggedIn, setOpen, open, curWindow, setCurWindow,Home, Services, Gallery } = props;
  
  const classes = useStyles();

  useEffect(() => {
  }, []); // <-- Have to pass in [] here!

  var openModal = (modalProps) => {
    props.showModal(modalProps);
  }
  return (
    <div className={classes.pageClass}>
      <Grid container className={classes.headingClass}>
        <Grid item xs={2} sm={3}>
          <div className={classes.logoClass}><img src={CofCLogo} className={classes.imageClass} /></div>
        </Grid>
        <Grid item xs={8} sm={6}>

          <Grid container>
            <Grid item xs={12}><Typography variant={'h2'} className={classes.TitleClass}>
              CFC Hardwood Floors LLC</Typography></Grid>
          </Grid>

        </Grid>
        <Grid item xs={2} sm={3}>
        <div className={classes.showNav}>
            <Button className={classes.heading} onClick={() => setOpen(!open)}>
              <Typography className={classes.heading} variant="h4">
                <FontAwesomeIcon icon={faList} />
              </Typography>
            </Button>
          </div>
          <div className={classes.showRequest}>
          <a onClick={() => openModal({ open: true, modalType: 'quoteModal', data: {} })}>
            <Button className={classes.quoteButton} style={{ backgroundColor: 'yellow' }} variant="contained" >Request Quote</Button>
          </a>
          </div>
        </Grid>
      </Grid>
      <div className={classes.showRequest}>
      <Grid container className={classes.linkOffset}>
        <Grid item xs={3} className={classes.linkClass} ><a href="#" onClick={() => setCurWindow(Home)}>Home</a></Grid>
        <Grid item xs={3} className={classes.linkClass} ><a href="#" onClick={() => setCurWindow(Services)}>Services</a></Grid>
        <Grid item xs={3} className={classes.linkClass} ><a href="#" onClick={() => setCurWindow(Gallery)}>Gallery</a></Grid>
        <Grid item xs={3} className={classes.linkClass}><a href="https://www.facebook.com/people/CFC-Hardwood-Floors-LLC/100067691010274/" target="_blank">Facebook</a></Grid>
      </Grid>
      </div>
      <Grid container className={classes.panorama}>
        <Grid item xs={12}>
          <Grid>
            <Grid item xs={12} style={{ opacity: .9 }} className={classes.headingLargeContainer} >
              <Typography variant={'h3'} className={classes.headingLarge}> Wood Floor Refinishing Service in Irmo, SC.<br />  Open today until 5:00 PM</Typography>
            </Grid>

          </Grid>
          <Grid item xs={12} style={{ width: 1600 }}>{curWindow}</Grid>
          <Grid item xs={12}><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></Grid>

          <Grid container style={{ backgroundColor: 'white' }}>
            <Grid item xs={3} className={classes.linkClass} ><a onClick={() => setCurWindow(<Home />)}>Home</a></Grid>
            <Grid item xs={3} className={classes.linkClass} ><a onClick={() => setCurWindow(<Services />)}>Services</a></Grid>
            <Grid item xs={3} className={classes.linkClass} ><a onClick={() => setCurWindow(<Gallery />)}>Gallery</a></Grid>
            <Grid item xs={3} className={classes.linkClass} ><a href="https://www.facebook.com/people/CFC-Hardwood-Floors-LLC/100067691010274/" target="_blank">Facebook</a></Grid>

          </Grid>

        </Grid>
      </Grid>

    </div>

  );
}




const mapStateToProps = (state) => ({
  modalProps: state.ahfrr.modalProps
});

const mapDispatchToProps = (dispatch) => ({
  showModal: (modalProps, modalTypes) => dispatch(showModal(modalProps, modalTypes)),
  hideModal: () => dispatch(hideModal()),
});
export default connect(mapStateToProps, mapDispatchToProps)(MainPageWrapper);