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

  const iconResponsiveStyles = {
    color: '#ffcc00', 
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

  // Thumbnail Wrapper Box Card configuration styling rules
  const thumbnailWrapperStyles = {
    position: 'relative',
    display: 'block',
    overflow: 'hidden',
    borderRadius: '6px',
    border: '2px solid #003569',
    aspectRatio: '1 / 1', 
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
    transition: 'all 0.25s ease-in-out',
    cursor: 'pointer',
    backgroundColor: '#002244',
    '&:hover': {
      borderColor: '#ffcc00',
      boxShadow: '0 4px 16px rgba(255, 204, 0, 0.3)',
      '& img': {
        transform: 'scale(1.08)',
      }
    }
  };

  const thumbnailImageStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.25s ease-in-out',
    display: 'block'
  };

  return (
    <Box sx={{ py: { xs: 2, md: 4 } }}>
      
      {/* Header Area Container */}
      <Grid container>
        <Grid item xs={12} sm={11} md={11} lg={11} sx={{ mx: 'auto', px: 2 }}>
          <Box sx={{ display: 'flex', gap: { xs: 2, sm: 4 }, alignItems: 'center' }}>
            <CameraIcon sx={iconResponsiveStyles} />
            <Typography sx={headingResponsiveStyles} variant="h4" component="h2">
              CFC Hardwood Gallery:
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Section Divider Line */}
      <Grid container sx={{ mt: { xs: 2, md: 4 }, mb: { xs: 3, md: 4 } }}>
        <Grid item xs={12} sm={11} md={11} lg={11} sx={{ mx: 'auto', px: 2 }}>
          <Box component="hr" sx={{ borderColor: 'rgba(255, 255, 255, 0.15)', m: 0 }} />
        </Grid>
      </Grid>

      {/* Main Compressed Image Thumbnail Grid Layout Area */}
      <Grid container>
        <Grid item xs={12} sm={11} md={11} lg={11} sx={{ mx: 'auto', px: 2 }}>
          <Grid 
            container 
            spacing={{ xs: 1.5, sm: 2 }} 
            columns={{ xs: 12, sm: 12, md: 10, lg: 12 }} // Maps out uniform fractional column distributions
          >
            {listOfImages.map((image, index) => {
              const imgSrc = image?.default || image;
              
              return (
                <Grid 
                  item 
                  key={index} 
                  xs={4}      // Yields 3 thumbnails per row on small phones
                  sm={3}      // Yields 4 thumbnails per row on tablet widths
                  md={2}      // Yields 5 thumbnails per row on medium screen displays
                  lg={2}      // Yields 6 thumbnails per row on widescreen viewports
                >
                  <Box 
                    component="a" 
                    href={imgSrc} 
                    target="_blank" 
                    rel="noreferrer" 
                    sx={thumbnailWrapperStyles}
                  >
                    <Box 
                      component="img" 
                      src={imgSrc} 
                      alt={`Hardwood flooring thumbnail layout sample ${index + 1}`} 
                      sx={thumbnailImageStyles} 
                    />
                  </Box>
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
