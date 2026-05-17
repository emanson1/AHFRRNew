import React from 'react';
import {Grid, Box} from '@mui/material ';
export default function FutureModal (props) {
  const {modalProps}=props;
  const instrument=modalProps.instrument;
  const background=modalProps.background;
  const divImage = {
    backgroundImage: "url('" + background + "')",
    backgroundColor:'lightgray',
    backgroundSize: 'cover',    
    height:'inherit',
    border:'2px solid blue'
  };
    return(
        <div className='cardContainer'>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid xs={12} item >{instrument}</Grid>
        </Grid>
        <Box style={divImage}>{instrument.Future}</Box>
     </div>
    
     
    )
  };