import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { connect } from 'react-redux';

const Services = props => {
  // Fluid responsive configurations replacing legacy transform scaling rules
  const iconResponsiveStyles = {
    color: '#ffcc00', // Changed to your yellow accent to contrast perfectly against the dark blue backdrop
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
    <Box sx={{ py: { xs: 2, md: 4 } }}>
      <Grid container>
        {/* Main Center-Aligned Section Wrapper */}
        <Grid item xs={12} sm={11} md={10} sx={{ mx: 'auto', px: 2 }}>
          <Box sx={{ display: 'flex', gap: { xs: 2, sm: 4 }, alignItems: 'flex-start' }}>
            
            {/* Engineering Header Icon */}
            <EngineeringIcon sx={iconResponsiveStyles} />
            
            {/* Text and Content Block */}
            <Box sx={{ flexGrow: 1 }}>
              <Typography sx={headingResponsiveStyles} variant="h4" component="div">
                <div>CFC Hardwood Services include:</div>
                <Box component="ul" sx={listContainerStyles}>
                  <li>CofC Hardwood LLC offers the absolute best in industry hardwood floor refinishing</li>
                </Box>
              </Typography>
            </Box>

          </Box>
        </Grid>
      </Grid>

      {/* Modern responsive gap spacer replacing legacy br clusters */}
      <Box sx={{ height: { xs: '80px', sm: '160px', md: '240px' } }} />
    </Box>
  );
}

const mapStateToProps = (state) => ({ 
  modalProps: state.ahfrr.modalProps 
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Services);
