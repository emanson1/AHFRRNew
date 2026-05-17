import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Dialog,Grid } from '@mui/material';
import {connect} from 'react-redux';
import { hideModal } from '../actions/ahfrrActions';
import QuoteModal from '../Shared/Modal';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

const Modals= {
       quoteModal: QuoteModal
   };
   
 
const ModalRoot = props => {
  const background=props.background;
  const modalProps=props.modalProps;
  const modalType=props.modalType;
  const instrument=props.modalProps.instrument;
  const SpecificModal = Modals[modalType];
 
 //const classes = makeStyles();




return (
  
<Dialog
  open={props.open}
  onClose={props.hideModal}
  aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description"
>
<div>
<SpecificModal handleClose={props.hideModal} modalProps={modalProps}  />
</div>
</Dialog>

);
}

const mapStateToProps = (state) => ({
  modalProps: state.ahfrr.modalProps,
  modalType: state.ahfrr.modalProps.modalType,
});

const mapDispatchToProps = (dispatch) => ({
  hideModal: () => dispatch(hideModal()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ModalRoot);

