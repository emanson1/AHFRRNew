import React from 'react';
import {Grid, Box} from '@mui/material ';
export default function Description (props) {
const {instrument}=props;
    return(
        <div className='cardContainer'>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid xs={12} item >Description</Grid>
        </Grid>
        <Box>{instrument.Description}</Box>
     </div>
    
     
    )
  };