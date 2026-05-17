import React from 'react';
import {Grid, Box} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
export default function InstitutionalOwnershipModal (props) {
  const {modalProps, handleClose}=props;
  const instrument=modalProps.instrument;
  
    return(
      <div className='cardContainer'><Grid container className='blue'>
      <Grid item xs={1}>
    <CloseIcon className='white' onClick={handleClose}/>
    </Grid>
    <Grid item xs={10}>
         <div className='modalTitle'> {`${instrument.Title} (${instrument.Symbol})`}</div>
      </Grid>
    </Grid>
    
      <Grid className='cardContainerTitle' container direction="row" justify="center" alignItems="center">
      <Grid xs={12} item >Description</Grid>
        </Grid>
        <Box>{instrument.Deacription}</Box>
     </div>
    
     
    )
  };