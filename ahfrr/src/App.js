import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { showModal, hideModal } from './actions/ahfrrActions';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Gallery from './Pages/Gallery';
import Navigation from './Pages/Navigation';
import ModalRoot from './Shared/ModalRoot';
import MainPage from './Pages/MainPage';
import { Routes, Route } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
function App(props) {
  const { modalProps } = props;
  const { modalType, open } = modalProps;
  
  const [openNav, setOpen] = useState(false);
  const [curWindow, setCurWindow] = useState(<Home />);
  

  return (
    
    <React.Fragment>
      <Routes>
        {/* In v6, use 'element' instead of 'render' */}
        <Route 
          path="/" 
          element={
            <MainPage 
              curWindow={curWindow} 
              setCurWindow={setCurWindow} 
              open={openNav} 
              setOpen={setOpen} 
              Home={<Home />} 
              Services={<Services />} 
              Gallery={<Gallery />}
            />
          } 
        />
      </Routes>

      <Navigation 
        open={openNav} 
        setOpen={setOpen} 
        curWindow={curWindow} 
        setCurWindow={setCurWindow} 
        Home={<Home />} 
        Services={<Services />} 
        Gallery={<Gallery />}
      /> 
      
      {modalType && <ModalRoot handleClose={props.hideModal} open={open} />}
    </React.Fragment>
        
  );
}
const mapStateToProps = (state) => ({
    modalProps: state.ahfrr.modalProps
  });
  

// Ensure you include hideModal in your mapDispatchToProps or connect
export default connect(mapStateToProps, { hideModal })(App);