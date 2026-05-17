import React, { useState } from 'react'
import { createTheme } from '@mui/material/styles';
import MainPageWrapper from './MainPageWrapper';
import { makeStyles } from '@mui/styles';
function MainPage(props) {
 const theme = createTheme();
 const useStyles = makeStyles((theme) => ({

    container: {
      width: '100%',
      height: '95%',
      justifyContent: 'center',

    },
    iconSize: {
      [theme.breakpoints.up('sm')]:
      {
        transform: 'scale(13.8)',
      },
      [theme.breakpoints.down('sm')]: {
        transform: 'scale(3.8)',
      }
    },
    iconSizeMedium: {
      transform: 'scale(4.1)',
      paddingTop: 15,
    },


  }));

  const { handleClose, handleOpen, setIsLoggedIn, open, setOpen,curWindow, setCurWindow,Home, Services, Gallery } = props;
  const classes = useStyles();
  const [sel, setSel] = useState([]);
  const [rej, setRej] = useState([]);





  return (
    <div>
      
         
      <div className={classes.container}>
        <MainPageWrapper  curWindow={curWindow} setCurWindow={setCurWindow} handleOpen={handleOpen} handleClose={handleClose} rej={rej} sel={sel} setSel={setSel} setRej={setRej} setIsLoggedIn={setIsLoggedIn} open={open} setOpen={setOpen} Gallery={Gallery} Services={Services} Home={Home}/>
      </div>
      
    </div>
  );
}

export default MainPage;
