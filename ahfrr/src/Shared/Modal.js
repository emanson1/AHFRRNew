import React from 'react';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles'; // FIX: Imported Theme Context
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box'; // FIX: Imported Box to wrap the body content Safely
import Typography from '@mui/material/Typography'; // FIX: Imported for standard text layout

// 1. FIX: Instantiated standard theme defaults for makeStyles to tap into
const themeInstance = createTheme();

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // 2. FIX: Explicitly defined the missing "body" structural variable
  const body = (
    <Box style={modalStyle} className={classes.paper}>
      <Typography id="simple-modal-title" variant="h6" component="h2">
        Modal Title Text
      </Typography>
      <Typography id="simple-modal-description" sx={{ mt: 2 }}>
        This is the body content inside your newly fixed modal panel.
      </Typography>
    </Box>
  );

  return (
    // 3. FIX: Wrapped inside ThemeProvider so theme values do not resolve as undefined
    <ThemeProvider theme={themeInstance}>
      <div>
        <button type="button" onClick={handleOpen}>
          Open Modal
        </button>
        <Modal 
          open={open} 
          onClose={handleClose} 
          aria-labelledby="simple-modal-title" 
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
    </ThemeProvider>
  );
}
