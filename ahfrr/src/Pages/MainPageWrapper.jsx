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
    setDrawerOpen(false); 
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
    fontSize: { xs: '0.9rem', sm: '1.4rem', md: '1.8rem', lg: '2.3rem', xl: '2.8rem' }, 
    lineHeight: 1.2 
  }; 

  const quoteButtonStyles = { 
    backgroundColor: '#ffcc00', 
    color: '#003569', 
    fontSize: { xs: '0.75rem', sm: '0.85rem', md: '1rem' }, 
    fontWeight: 'bold', 
    px: { xs: 1.5, sm: 2, md: 3 }, 
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
    display: { xs: 'none', sm: 'flex' }, 
    justifyContent: 'space-around', 
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
      <Box sx={{ backgroundColor: 'white', p: { xs: 1.5, sm: 2, md: 3 } }}> 
        <Grid container sx={{ alignItems: 'center', flexWrap: 'nowrap', justifyContent: 'space-between' }}> 
          
          {/* Item 1: Logo Asset Grid Box */} 
          <Grid item xs="auto" sm={2.5} md={2} sx={{ display: 'flex', justifyContent: 'flex-start', flexShrink: 0 }}> 
            <Box 
              component="img" 
              src={CofCLogo} 
              alt="Logo" 
              sx={{ 
                width: '100%', 
                maxWidth: { xs: '55px', sm: '110px', md: '140px', lg: '160px' }, 
                height: 'auto' 
              }} 
            /> 
          </Grid> 
          
          {/* Item 2: Main Business Title Description Label */} 
          <Grid 
            item 
            xs
            sm={7} 
            md={8} 
            sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              px: { xs: 1, sm: 2 }
            }}
          > 
            <Typography variant="h2" sx={titleStyles}> 
              Artisan Hardwood Floor Refinishing and Restoration 
            </Typography> 
          </Grid> 
          
          {/* Item 3: Actions Column - Displays Request Quote on Desktop, Hamburger Menu on Mobile */} 
          <Grid 
            item 
            xs="auto" 
            sm={2.5} 
            md={2} 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'flex-end', 
              flexShrink: 0 
            }}
          > 
            {/* Desktop Action View Button */}
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button 
                onClick={() => openModal({ open: true, modalType: 'quoteModal', data: {} })} 
                sx={quoteButtonStyles} 
                variant="contained" 
              > 
                Request Quote 
              </Button> 
            </Box>

            {/* Mobile Action View Hamburger Button - Pinned to the top right corner */}
            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
              <IconButton 
                color="inherit" 
                aria-label="open drawer" 
                onClick={handleDrawerToggle} 
                sx={{ color: '#003569', p: 0.5 }}
              > 
                <MenuIcon sx={{ fontSize: '1.8rem' }} /> 
              </IconButton> 
            </Box>
          </Grid> 

        </Grid>
      </Box> 

      {/* Primary Navigation Desktop Bar Links Block */} 
      <Box sx={linkOffsetStyles}> 
        <Box sx={linkClassStyles}><a href="#!" onClick={() => setCurWindow(Home)}>Home</a></Box> 
        <Box sx={linkClassStyles}><a href="#!" onClick={() => setCurWindow(Services)}>Services</a></Box> 
        <Box sx={linkClassStyles}><a href="#!" onClick={() => setCurWindow(Gallery)}>Gallery</a></Box> 
        <Box sx={linkClassStyles}> 
          <a href="https://facebook.com" target="_blank" rel="noreferrer"> 
            Facebook 
          </a> 
        </Box> 
      </Box> 

      {/* Slide-out Mobile Sidebar Panel Drawer Layout Component */} 
      <Drawer 
        variant="temporary" 
        open={drawerOpen} 
        onClose={handleDrawerToggle} 
        ModalProps={{ keepMounted: true }} 
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
          {/* Mobile Quote Action inside sidebar layout tree */}
          <ListItem disablePadding sx={{ borderTop: '1px dashed rgba(255,255,255,0.2)', mt: 1 }}> 
            <ListItemButton 
              onClick={() => { handleDrawerToggle(); openModal({ open: true, modalType: 'quoteModal', data: {} }); }} 
              sx={{ textAlign: 'center', py: 1.5, backgroundColor: '#ffcc00', color: '#003569', '&:hover': { backgroundColor: '#e6b800' } }}
            > 
              <ListItemText primary="Request Quote" primaryTypographyProps={{ fontWeight: 'bold', fontSize: '1.1rem' }} /> 
            </ListItemButton> 
          </ListItem> 
          <ListItem disablePadding> 
            <ListItemButton 
              component="a" 
              href="https://facebook.com" 
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
