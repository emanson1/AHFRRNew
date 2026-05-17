import React from 'react';
import Dialog from '@mui/material/Dialog'; // Or whatever your modal primitive is
import QuoteModal from '../Modals/QuoteModal';


const MODAL_COMPONENTS = {
  'quoteModal': QuoteModal
  };

export default function ModalRoot({ modalType, open, handleClose }) {
  // If no type matches, render an empty fragment so Material-UI doesn't break
  const SpecificModal = MODAL_COMPONENTS[modalType] || (() => null);

  return (
    <Dialog open={open} onClose={handleClose}>
      <SpecificModal handleClose={handleClose} />
    </Dialog>
  );
}