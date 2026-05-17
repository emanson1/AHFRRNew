import React, { useState, useEffect } from 'react';
import { Grid, Box, Typography } from '@mui/material ';
import { makeStyles } from '@mui/material /styles';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { connect } from 'react-redux';
const useStyles = makeStyles((theme) => ({
    triPane:{opacity:.75},
    containerClass:{
      paddingTop:60,

      [theme.breakpoints.down('lg')]:
        { 
          paddingTop:40,
        },  
        [theme.breakpoints.down('md')]: {
          paddingTop:30,
        },
        [theme.breakpoints.down('sm')]: {
          paddingTop:20,
        },
        [theme.breakpoints.down('xs')]: {
          paddingTop:10,

        }      
    },
    blueBar:{backgroundColor:'#003569'},
     pageClass:{
     border:'1px solid #8C92B4',
     backgroundColor:'#003569',
     padding:20
     
    },
    iconSize: {
      paddingTop:16,
      color: '#003569',
      transform: 'scale(11.0)',
      paddingRight:10,
  
      [theme.breakpoints.down('lg')]:
        { 
          transform: 'scale(9.0)',
          paddingRight:12,
        },  
        [theme.breakpoints.down('md')]: {
          paddingTop:10,
          paddingRight:14,
          vtransform: 'scale(7.0)',
        },
        [theme.breakpoints.down('sm')]: {
          paddingRight:16,
          transform: 'scale(4.5)',
        },
        [theme.breakpoints.down('xs')]: {
          paddingTop:6,
          paddingRight:24,
          transform: 'scale(2.0)',
        }
      },
    
      iconSizeMedium:{
        transform: 'scale(4.1)',
        paddingTop: 15,
       },
     
    alignBottom:{
     display:'table-cell',
     verticalAlign:'middle',
     textAlign:'center',
     border:'1px dotted #888',
     
    },
     root: {
       width: '100%',
     },
     linkOffset:{
       paddingTop:20,
       
     },
     boxBlue:{
     backgroundColor:'#003569',
     paddingTop:30,
     paddingBottom:30,
     color:'#FFFFFF',
     textAlign:'center',
     fontSize:24,
     paddingLeft:30,
     paddingRight:30,
     height:81,
     width:121
   
     },
     marginTopBottom30:{
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'center',
       height:'100%',
       width:'100%'
     },
     linkClass:{
       fontSize:20,
       textAlign:'center'
     },
     headingClass:{
       backgroundColor:'white',
       
     },
    logoClass:
    {
     paddingTop:10,
     display: 'flex',
     justifyContent: 'center',
     textAlign:'center',   
     paddingBottom:10,
   },
   placeStairs: {
     verticalAlign:'top',
     position:'relative',
     top:-20,
   },
   copyWhite:{
   fontSize:20,
   color:'white',
   //fontWeight:'bold'
   
   },
   logoColor:{
     paddingTop:30,
     color: '#003569',
     //color: '#8C92B4',
     textAlign: 'center',
     fontWeight: 'bold',
     textShadow: '-1px 0 #8C92B4, 0 3px #8C92B4, 1px 0 #8C92B4, 0 -1px #8C92B4'
     //fontFamily:'cursive'
   },
     headingLarge:{
       //paddingTop:50,
       //paddingBottom:10,
       
       color:'white',
       fontWeight:'bold',
       textShadow: '-1px 0 black, 0 3px black, 1px 0 black, 0 -1px black'
     },
     headingMedium:{
      [theme.breakpoints.up('sm')]:
      { 
       fontSize:45,
     },  
      [theme.breakpoints.down('sm')]: {
        //width: '90vw',
      fontSize:32,
      },
      [theme.breakpoints.down('xs')]: {
        //width: '90vw',
      fontSize:22,
      },
     color:'white',
     fontWeight:'bold',
     textShadow: '-1px 0 black, 0 3px black, 1px 0 black, 0 -1px black'
   },

     contactBox:{
       paddingTop:10,
       backgroundColor: '#ffcc00',
       color: '#003569',
       height:141,
       width:141,
       fontSize:30,
       display: 'flex',
       justifyContent: 'center',
       textAlign:'center',   
       fontWeight:'bold'
     },
     darkBlueBackgroundLayer:
     {
       backgroundColor:'#145493',
       color:'white'
   
     },
     whiteBackgroundLayer:
     {
       backgroundColor:'white',
       color:'#145493'
   
     },
     li:
     {
       fontSize:19
     }
   }));
   const About = props => {
    const classes = useStyles();
return (
<Grid container className={classes.containerClass}>
        <Grid item xs={1} sm={2}>
          {/* <a  onClick={()=>setIsLogdgedIn(false)}>LogOut</a> */}
          </Grid> 
        <Grid item xs={11} sm={10}>
        <Grid container >
        <Grid item xs={1}>
        
        <AccountBoxIcon className={classes.iconSize} />
        </Grid>
        <Grid item xs={10}>
          <Typography className={classes.headingMedium} variant={'h4'}>
          <div>About CFC Hardwood Services LLC:</div>
          <ul>
            <li>CofC Hardwood LLC was founded in 2010 by William Miller to provide the absolute best in industry hardwood floor refinishing</li>
            
            </ul></Typography>
            </Grid>
 
            <Grid item xs={1}>
            </Grid>
        </Grid>
        
<Grid item xs={12}><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></Grid>
          
          
          
         </Grid>
        <Grid item xs={1}>
          {/* <a  onClick={()=>openModal({open:true, modalType:'Wishlist', instrument:{}})}>Account&nbsp;&nbsp;&nbsp;</a> */}
        </Grid>
      </Grid>

);
}
const mapStateToProps = (state) => ({
    modalProps: state.ahfrr.modalProps
  });
  
  const mapDispatchToProps = (dispatch) => ({
   });
  export default connect(mapStateToProps, mapDispatchToProps)(About);
