import React from 'react';
import {Grid, Box} from '@material-ui/core';
import '../App.css';
import CloseIcon from '@material-ui/icons/Close';

export default function NetMarginModal (props) {
  const {modalProps, handleClose}=props;

  const instrument=modalProps.instrument;
  const background=modalProps.background;
  const divImage=props.divImage;
 
  return(
    <div style={{backgroundColor:'#444c4f'}}>
    <Grid container className={'modalContainer'}>
  <Grid item xs={1}>
<CloseIcon className='white' onClick={handleClose}/>
</Grid>
<Grid item xs={10}>
     <div className={'modalTitle'}> {`${instrument.Title} (${instrument.Symbol})`}</div>
  </Grid>
</Grid>

    <Grid container direction="row" justify="center" alignItems="center">
          <Grid xs={12} className={'modalType'} item >Net Margin</Grid>
          </Grid>
          <Box style={divImage} >
            <div className={'modalText'}>{instrument.NetMargin}</div></Box>
            </div>)
    };
