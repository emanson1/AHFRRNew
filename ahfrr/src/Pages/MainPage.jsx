import React, { useState } from 'react';
import { Box } from '@mui/material';
import MainPageWrapper from './MainPageWrapper';

function MainPage(props) {
  const { 
    handleClose, 
    handleOpen, 
    setIsLoggedIn, 
    open, 
    setOpen, 
    curWindow, 
    setCurWindow, 
    Home, 
    Services, 
    Gallery 
  } = props;

  const [sel, setSel] = useState([]);
  const [rej, setRej] = useState([]);

  return (
    <Box 
      sx={{ 
        width: '100%', 
        height: '95%', 
        justifyContent: 'center' 
      }}
    >
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
    </Box>
  );
}

export default MainPage;
