import React, { useEffect } from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import { showModal, hideModal } from '../actions/ahfrrActions';
import { connect } from 'react-redux';
import Background from '../Images/Gallery/floorpic2.png';
import CofCLogo from '../Images/CFCLogo.png';

const MainPageWrapper = props => {
  const { curWindow, setCurWindow, Home, Services, Gallery } = props;

  useEffect(() => {}, []);

  const openModal = (modalProps) => {
    props.showModal(modalProps);
  };

  // Modern Responsive Styles configuration matrices
  const pageStyles = {
    border: '1px solid #8C92B4',
    backgroundColor: '#003569',
    p: { xs: 1, sm: 2 },
    minHeight: '100vh'
  };

  const titleStyles = {
    color: '#003569',
    textAlign: 'center',
    fontWeight: 'bold',
    textShadow: {
      xs: '-1px 0 #8C92B4, 0 1px #8C92B4, 1px 0 #8C92B4, 0 -1px #8C92B4',
      md: '-1px 0 #8C92B4, 0 3px #8C92B4, 1px 0 #8C92B4, 0 -1px #8C92B4'
    },
    fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2.5rem', lg: '3.2rem' },
    lineHeight: 1.2
  };

  const quoteButtonStyles = {
    backgroundColor: '#ffcc00',
    color: '#003569',
    fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1.1rem' },
    fontWeight: 'bold',
    px: { xs: 3, md: 4 },
    py: { xs: 1, md: 1.5 },
    border: '2px solid #003569',
    boxShadow: 'none',
    whiteSpace: 'nowrap',
    '&:hover': {
      backgroundColor: '#e6b800',
      boxShadow: 'none'
    }
  };

  const linkOffsetStyles = {
    backgroundColor: 'white',
    py: 2,
    borderTop: '1px solid rgba(0,0,0,0.08)',
    borderBottom: '3px solid #ffcc00'
  };

  const linkClassStyles = {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.3rem' },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& a': { 
      textDecoration: 'none', 
      color: '#003569',
      padding: '6px 16px',
      borderRadius: '4px',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        backgroundColor: 'rgba(0, 53, 105, 0.08)',
        color: '#002244'
      }
    }
  };

  const headingLargeContainerStyles = {
    opacity: 0.95,
    backgroundColor: 'rgba(0, 53, 105, 0.85)',
    borderTop: '4px solid #ffcc00',
    borderBottom: '4px solid #ffcc00'
  };

  const headingLargeStyles = {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    textShadow: '-1px 0 black, 0 2px black, 1px 0 black, 0 -1px black',
    fontSize: { xs: '1.1rem', sm: '1.6rem', md: '2.2rem', lg: '2.6rem' },
    py: { xs: 4, md: 6 },
    px: 2,
    lineHeight: 1.4
  };

  return (
    <Box sx={pageStyles}>
      {/* Header Area */}
      <Box sx={{ backgroundColor: 'white', p: { xs: 2, sm: 3 } }}>
        <Grid container spacing={2} sx={{ alignItems: 'center' }}>
          <Grid item xs={12} sm={3} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box 
              component="img" 
              src={CofCLogo} 
              alt="Logo" 
              sx={{ 
                width: '100%', 
                maxWidth: { xs: '120px', sm: '140px', md: '180px' },
                height: 'auto'
              }} 
            />
          </Grid>
          
          <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h2" sx={titleStyles}>
              CFC Hardwood Floors LLC
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Button 
              onClick={() => openModal({ open: true, modalType: 'quoteModal', data: {} })} 
              sx={quoteButtonStyles} 
              variant="contained"
            >
              Request Quote
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Primary Navigation Links Block */}
      <Grid container sx={linkOffsetStyles}>
        <Grid item xs={3} sx={linkClassStyles}><a href="#!" onClick={() => setCurWindow(Home)}>Home</a></Grid>
        <Grid item xs={3} sx={linkClassStyles}><a href="#!" onClick={() => setCurWindow(Services)}>Services</a></Grid>
        <Grid item xs={3} sx={linkClassStyles}><a href="#!" onClick={() => setCurWindow(Gallery)}>Gallery</a></Grid>
        <Grid item xs={3} sx={linkClassStyles}>
          <a href="https://www.facebook.com/people/CFC-Hardwood-Floors-LLC/100067691010274/" target="_blank" rel="noreferrer">
            Facebook
          </a>
        </Grid>
      </Grid>

      {/* Main Content Area Box Wrapper with Panorama Backdrop */}
      <Box 
        sx={{ 
          backgroundImage: `url(${Background})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }} 
      >
        <Box sx={{ width: '100%' }}>
          <Box sx={headingLargeContainerStyles}>
            <Typography variant="h3" sx={headingLargeStyles}>
              Wood Floor Refinishing Service in Irmo, SC.<br /> Open today until 5:00 PM
            </Typography>
          </Box>

          {/* Active Window Render Injector Area */}
          <Box sx={{ maxWidth: 1600, mx: 'auto', p: { xs: 2, sm: 4, md: 6 } }}>
            {curWindow}
          </Box>
          
          {/* Spatial Padding Alternative to repeated breakout breaks */}
          <Box sx={{ height: { xs: '60px', sm: '120px' } }} />

          {/* Footer Sub-Links Grid Wrapper Area */}
          <Grid container sx={{ backgroundColor: 'white', py: 4, borderTop: '4px solid #ffcc00' }}>
            <Grid item xs={3} sx={linkClassStyles}><a href="#!" onClick={() => setCurWindow(Home)}>Home</a></Grid>
            <Grid item xs={3} sx={linkClassStyles}><a href="#!" onClick={() => setCurWindow(Services)}>Services</a></Grid>
            <Grid item xs={3} sx={linkClassStyles}><a href="#!" onClick={() => setCurWindow(Gallery)}>Gallery</a></Grid>
            <Grid item xs={3} sx={linkClassStyles}>
              <a href="https://www.facebook.com/people/CFC-Hardwood-Floors-LLC/100067691010274/" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => ({ 
  modalProps: state.ahfrr.modalProps 
});

const mapDispatchToProps = (dispatch) => ({
  showModal: (modalProps, modalTypes) => dispatch(showModal(modalProps, modalTypes)),
  hideModal: () => dispatch(hideModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPageWrapper);
