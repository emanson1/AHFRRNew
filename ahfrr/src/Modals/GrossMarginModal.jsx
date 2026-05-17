import React from 'react';
import {Grid} from '@material-ui/core';
export default function GrossMarginModal (props) {
  const {modalProps, handleClose}=props;
  const instrument=modalProps.instrument;
  
    return(
      <div className='cardContainer'>
      <Grid className='cardContainerTitle' container direction="row" justify="center" alignItems="center">
       <Grid xs={12} item >Dashboard</Grid>
        </Grid>
     </div>
    
     
    )
  };