import React, { useState, useEffect } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import CameraIcon from '@mui/icons-material/CameraAlt';
import { connect } from 'react-redux';

const Gallery = props => {
  const [listOfImages, setListOfImages] = useState([]);

  const importAll = (r) => {
    return r.keys().map(r);
  };

  useEffect(() => {
    const images = importAll(require.context('../Images/Gallery/', false, /\.(png|jpeg|svg)$/));
    setListOfImages(images);
  }, []);

  // Modernized theme token design configuration values
  const iconResponsiveStyles = {
    color: '#ffcc00', // Switched to matching gold brand color tone for strong layout visibility
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

  const imageCardStyles = {
    border: '3px solid #003569',
    borderRadius: '4px',
    width: '100%',
    aspectRatio: '1 / 1', // Guarantees pixel-perfect squares across all devices
    objectFit: 'cover',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    transition: 'transform 0.2s ease-in-out, border-color 0.2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.03)',
      borderColor: '#ffcc00'
    }
  };

  return (
    <Box sx={{ py: { xs: 2, md: 4 } }}>
      
      {/* Header Area Container */}
      <Grid container>
        <Grid item xs={12} sm={11} md={10} sx={{ mx: 'auto', px: 2 }}>
          <Box sx={{ display: 'flex', gap: { xs: 2, sm: 4 }, alignItems: 'center' }}>
            <CameraIcon sx={iconResponsiveStyles} />
            <Typography sx={headingResponsiveStyles} variant="h4" component="h2">
              Cfc Hardwood Gallery:
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Styled Structural Section Divider */}
      <Grid container sx={{ mt: { xs: 2, md: 4 }, mb: { xs: 3, md: 5 } }}>
        <Grid item xs={12} sm={11} md={10} sx={{ mx: 'auto', px: 2 }}>
          <Box component="hr" sx={{ borderColor: 'rgba(255, 255, 255, 0.15)', m: 0 }} />
        </Grid>
      </Grid>

      {/* Main Image Gallery Layout Board */}
      <Grid container>
        <Grid item xs={12} sm={11} md={10} sx={{ mx: 'auto', px: 2 }}>
          <Grid container spacing={{ xs: 2, sm: 3 }}>
            
            {listOfImages.map((image, index) => {
              const imgSrc = image?.default || image;
              
              return (
                <Grid item key={index} xs={6} sm={4} md={3}>
                  <a href={imgSrc} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                    <Box 
                      component="img" 
                      src={imgSrc} 
                      alt={`Hardwood service project showcase ${index + 1}`} 
                      sx={imageCardStyles} 
                    />
                  </a>
                </Grid>
              );
            })}

          </Grid>
        </Grid>
      </Grid>

    </Box>
  );
}

const mapStateToProps = (state) => ({ 
  modalProps: state.ahfrr.modalProps 
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
