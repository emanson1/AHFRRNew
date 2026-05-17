import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/HomeWork';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { connect } from 'react-redux';

const Home = props => {
  // Modern, responsive icon configurations replacing legacy transform scaling 
  const iconResponsiveStyles = {
    color: '#ffcc00', // Changed to your yellow accent to contrast beautifully against the dark blue backdrop
    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5rem' },
    flexShrink: 0
  };

  const headingResponsiveStyles = {
    color: 'white',
    fontWeight: 'bold',
    textShadow: '-1px 0 black, 0 2px black, 1px 0 black, 0 -1px black',
    fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2.4rem' },
    lineHeight: 1.3
  };

  const listContainerStyles = {
    m: 0, 
    pt: 2, 
    pl: 3,
    fontSize: { xs: '0.95rem', sm: '1.1rem', md: '1.2rem' },
    fontWeight: 'normal',
    textShadow: 'none',
    color: '#e0e0e0',
    display: 'flex',
    flexDirection: 'column',
    gap: 1.5,
    '& li': {
      lineHeight: 1.4
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 4, md: 8 }, py: { xs: 2, md: 4 } }}>
      
      {/* First Section Container */}
      <Grid container>
        <Grid item xs={12} sm={11} md={10} sx={{ mx: 'auto', px: 2 }}>
          <Box sx={{ display: 'flex', gap: { xs: 2, sm: 4 }, alignItems: 'flex-start' }}>
            <HomeIcon sx={iconResponsiveStyles} />
            
            <Box sx={{ flexGrow: 1 }}>
              <Typography sx={headingResponsiveStyles} variant="h4" component="h2">
                CFC Hardwood is:
              </Typography>
              <Box component="ul" sx={listContainerStyles}>
                <li>Family owned business serving the greater Columbia area for sixteen (16) years</li>
                <li>Exceptional work and honest pricing, with 100s of satisfied customers and a 5 star Google rating</li>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Second Section Container */}
      <Grid container>
        <Grid item xs={12} sm={11} md={10} sx={{ mx: 'auto', px: 2 }}>
          <Box sx={{ display: 'flex', gap: { xs: 2, sm: 4 }, alignItems: 'flex-start' }}>
            <AccountBoxIcon sx={iconResponsiveStyles} />
            
            <Box sx={{ flexGrow: 1 }}>
              <Typography sx={headingResponsiveStyles} variant="h4" component="h2">
                About CFC Hardwood Services LLC:
              </Typography>
              <Box component="ul" sx={listContainerStyles}>
                <li>CofC Hardwood LLC was founded in 2010 by William Miller to provide the absolute best in industry hardwood floor refinishing</li>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>

    </Box>
  );
}

const mapStateToProps = (state) => ({ 
  modalProps: state.ahfrr.modalProps 
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
