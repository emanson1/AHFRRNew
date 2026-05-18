import React, { useEffect, useState } from 'react';
import { Grid, Box, Typography, Button, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { showModal, hideModal } from '../actions/ahfrrActions';
import { connect } from 'react-redux';
import Background from '../Images/Gallery/1000007324.jpg';
import CofCLogo from '../Images/AHFRR Logo.png';

const MainPageWrapper = props => {
  const { curWindow, setCurWindow, Home, Services, Gallery } = props;
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {}, []);

  const openModal = (modalProps) => {
    props.showModal(modalProps);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavClick = (targetWindow) => {
    setCurWindow(targetWindow);
    setDrawerOpen(false); // Auto-closes mobile sidebar upon tap selection
  };

  // Responsive Styles configuration matrices
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
    fontSize: { xs: '1.2rem', sm: '1.8rem', md: '2.5rem', lg: '3.2rem' },
    lineHeight: 1.2
  };

  const quoteButtonStyles = {
    backgroundColor: '#ffcc00',
    color: '#003569',
    fontSize: { xs: '0.75rem', sm: '0.9rem', md: '1.1rem' },
    fontWeight: 'bold',
    px: { xs: 2, md: 4 },
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
    borderBottom: '3px solid #ffcc00',
    display: { xs: 'none', sm: 'flex' }, // Hides bar links completely on smartphone rows
    justifyContent: 'space-around', // Evenly distributes space around links
    alignItems: 'center'
  };

  const linkClassStyles = {
    fontWeight: 'bold',
    fontSize: { sm: '1.1rem', md: '1.3rem' },
    '& a': { 
      textDecoration: 'none', 
      color: '#003569',
      padding: '6px 22px',
      borderRadius: '4px',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        backgroundColor: 'rgba(0, 53, 105, 0.08)',
        color: '#002244'
      }
    }
  };

  const footerOffsetStyles = {
    backgroundColor: 'white',
    py: 4,
    borderTop: '4px solid #ffcc00',
    display: 'flex',
    justifyContent: 'space-around', // Dynamic cross-browser element expansion sizing
    alignItems: 'center',
    flexDirection: { xs: 'column', sm: 'row' }, // Stack vertical layouts only inside mobile footers
    gap: { xs: 2, sm: 0 }
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
      {/* Header Area Container */}
      <Box sx={{ backgroundColor: 'white', p: { xs: 2, sm: 3 } }}>
        <Grid container spacing={2} sx={{ alignItems: 'center' }}>
          
          {/* Menu Trigger Icon Column - Displayed strictly on mobile views */}
          <Grid item xs={2} sm={0} sx={{ display: { xs: 'flex', sm: 'none' }, justifyContent: 'flex-start' }}>
            <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerToggle} sx={{ color: '#003569' }}>
              <MenuIcon sx={{ fontSize: '2rem' }} />
            </IconButton>
          </Grid>

          <Grid item xs={8} sm={3} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box 
              component="img" 
              src={CofCLogo} 
              alt="Logo" 
              sx={{ 
                width: '100%', 
                maxWidth: { xs: '90px', sm: '140px', md: '180px' },
                height: 'auto'
              }} 
            />
          </Grid>
          
          <Grid item xs={12} sm={6} sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h2" sx={titleStyles}>
              Artisan Hardwood Floor Refinishing and Restoration
            </Typography>
          </Grid>
          
          <Grid item xs={2} sm={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <Button 
              onClick={() => openModal({ open: true, modalType: 'quoteModal', data: {} })} 
              sx={quoteButtonStyles} 
              variant="contained"
            >
              Request Quote
            </Button>
          </Grid>

          {/* Centralized title element row injection block optimized for narrow screens */}
          <Grid item xs={12} sx={{ display: { xs: 'flex', sm: 'none' }, justifyContent: 'center', pt: 1 }}>
            <Typography variant="h2" sx={titleStyles}>
              Artisan Hardwood Floor Refinishing
            </Typography>
          </Grid>

        </Grid>
      </Box>

      {/* Primary Navigation Desktop Bar Links Block */}
      <Box sx={linkOffsetStyles}>
        <Box sx={linkClassStyles}><a href="#!" onClick={() => setCurWindow(Home)}>Home</a></Box>
        <Box sx={linkClassStyles}><a href="#!" onClick={() => setCurWindow(Services)}>Services</a></Box>
        <Box sx={linkClassStyles}><a href="#!" onClick={() => setCurWindow(Gallery)}>Gallery</a></Box>
        <Box sx={linkClassStyles}>
          <a href="https://www.facebook.com/people/CFC-Hardwood-Floors-LLC/100067691010274/" target="_blank" rel="noreferrer">
            Facebook
          </a>
        </Box>
      </Box>

      {/* Slide-out Mobile Sidebar Panel Drawer Layout Component */}
      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }} // Yields faster render performance metrics on low-powered mobile devices
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, backgroundColor: '#003569', color: 'white' },
        }}
      >
        <Box sx={{ textAlign: 'center', p: 2, borderBottom: '2px solid #ffcc00', backgroundColor: 'white', color: '#003569' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Navigation</Typography>
        </Box>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavClick(Home)} sx={{ textAlign: 'center', py: 1.5 }}>
              <ListItemText primary="Home" primaryTypographyProps={{ fontWeight: 'bold', fontSize: '1.1rem' }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavClick(Services)} sx={{ textAlign: 'center', py: 1.5 }}>
              <ListItemText primary="Services" primaryTypographyProps={{ fontWeight: 'bold', fontSize: '1.1rem' }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleNavClick(Gallery)} sx={{ textAlign: 'center', py: 1.5 }}>
              <ListItemText primary="Gallery" primaryTypographyProps={{ fontWeight: 'bold', fontSize: '1.1rem' }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton 
              component="a" 
              href="https://www.facebook.com/people/CFC-Hardwood-Floors-LLC/100067691010274/" 
              target="_blank" 
              rel="noreferrer" 
              sx={{ textAlign: 'center', py: 1.5, color: '#ffcc00' }}
            >
              <ListItemText primary="Facebook" primaryTypographyProps={{ fontWeight: 'bold', fontSize: '1.1rem' }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

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
              Wood Floor Refinishing Service in Columbia, SC.<br /> Open today until 5:00 PM
            </Typography>
          </Box>

          {/* Active Window Render Injector Area */}
          <Box sx={{ maxWidth: 1600, mx: 'auto', p: { xs: 2, sm: 4, md: 6 } }}>
            {curWindow}
          </Box>
          
          {/* Spatial Padding Alternative to repeated breakout breaks */}
          <Box sx={{ height: { xs: '60px', sm: '120px' } }} />

          
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
