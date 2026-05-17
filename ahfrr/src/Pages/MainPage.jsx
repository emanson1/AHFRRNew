import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles'; // FIX: Imported ThemeProvider
import MainPageWrapper from './MainPageWrapper';
import { makeStyles } from '@mui/styles';

// 1. FIX: Moved theme creation to the top level
const theme = createTheme();

// 2. FIX: Moved useStyles outside of the component wrapper
const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '95%',
    justifyContent: 'center',
  },
  iconSize: {
    [theme.breakpoints.up('sm')]: {
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

function MainPage(props) {
  const { handleClose, handleOpen, setIsLoggedIn, open, setOpen, curWindow, setCurWindow, Home, Services, Gallery } = props;
  
  // 3. FIX: Safely invoke the hook inside the component function
  const classes = useStyles(); 
  
  const [sel, setSel] = useState([]);
  const [rej, setRej] = useState([]);

  return (
    // 4. FIX: Wrapped layout in ThemeProvider so styles can resolve breakpoints
    <ThemeProvider theme={theme}>
      <div>
        <div className={classes.container}>
          <MainPageWrapper 
            curWindow={curWindow} 
            setCurWindow={setCurWindow} 
            handleOpen={handleOpen} 
            handleClose={handleClose} 
            rej={rej} 
            sel={sel} 
            setSel={setSel} 
            setRej={setRej} 
            setIsLoggedIn={setIsLoggedIn} 
            open={open} 
            setOpen={setOpen} 
            Gallery={Gallery} 
            Services={Services} 
            Home={Home}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MainPage;
