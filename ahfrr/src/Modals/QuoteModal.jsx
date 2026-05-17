import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField as FormikTextField } from 'formik-material-ui';
import * as Yup from 'yup';
// Modern MUI imports
import { Grid, Typography, Button, Box } from '@mui/material'; 
import CofCLogoSmall from '../Images/CFCLogoSmall.png';
import emailjs from '@emailjs/browser';

export default function QuoteModal(props) {
  const { handleClose } = props;

  const SERVICE_ID = (typeof process !== 'undefined' && process.env?.REACT_APP_EMAILJS_SERVICE_ID) || '';
  const TEMPLATE_ID = (typeof process !== 'undefined' && process.env?.REACT_APP_EMAILJS_TEMPLATE_ID) || '';
  const PUBLIC_KEY = (typeof process !== 'undefined' && process.env?.REACT_APP_EMAILJS_PUBLIC_KEY) || '';

  const sendEmail = (object, actions) => {
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, object, { publicKey: PUBLIC_KEY })
      .then(
        () => {
          alert('Message sent successfully! Someone will get back to you soon.');
          actions.resetForm();
          handleClose();
        },
        (error) => {
          console.error('FAILED...', error);
          alert('Failed to send message. Please try again.');
          actions.setSubmitting(false);
        }
      );
  };

  const submitForm = (values, actions) => {
    let attStr = '';
    try {
      const images = [];
      const attachments = values.attachments || [];
      for (let x = 0; x < attachments.length; x++) {
        let fileType = 'text/plain';
        const fileName = attachments[x].FileName || '';
        const fileExt = fileName.substring(fileName.lastIndexOf('.') + 1).toLowerCase();

        switch (fileExt) {
          case 'jpg':
          case 'png':
          case 'gif':
          case 'jpeg':
            fileType = 'image/png';
            break;
          case 'pdf':
            fileType = 'application/pdf';
            break;
          case 'xls':
            fileType = 'application/excel';
            break;
          case 'xlsx':
            fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
            break;
          case 'doc':
          case 'dot':
            fileType = 'application/msword';
            break;
          case 'docx':
            fileType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
            break;
          default:
            fileType = 'text/plain';
        }

        if (attachments[x].Data) {
          images.push({
            filename: attachments[x].FileName,
            content: attachments[x].Data.split(',')[1],
            encoding: 'base64',
            contentType: fileType,
          });
        }
      }
      values.attachmentStr = attStr;
      let emailaddress = values.to_email;
      if (!emailaddress || emailaddress.length === 0) {
        values.to_email = 'wmfloorman75@gmail.com';
      }
      sendEmail(values, actions);
    } catch (ex) {
      alert(ex.message || ex);
      actions.setSubmitting(false);
    }
  };

  const getSchema = () => {
    return Yup.object().shape(
      {
        customername: Yup.string().required('Please give us a good contact name'),
        comments: Yup.string().required('Please give us a little information. We will reach out if we need more'),
        customerphone: Yup.string().when('to_email', {
          is: (email) => !email || email.length === 0,
          then: () => Yup.string().required('Phone or email is required'),
        }),
        to_email: Yup.string()
          .email('Must be a valid email address')
          .max(255)
          .when('customerphone', {
            is: (phone) => !phone || phone.length === 0,
            then: () => Yup.string().required('Phone or email is required'),
          }),
      },
      [['customerphone', 'to_email']]
    );
  };

  return (
    <Formik
      initialValues={{
        customername: '',
        to_email: '',
        customerphone: '',
        comments: '',
        attachmentStr: '',
        attachments: [],
      }}
      onSubmit={(values, actions) => {
        submitForm(values, actions);
      }}
      validationSchema={getSchema()}
    >
      {({ isSubmitting }) => (
        <Form>
          {/* Main Grid Wrapper */}
          <Grid 
            container 
            sx={{ 
              overflow: 'none', 
              border: '2px solid #ffcc00', 
              p: 0.6, // MUI padding multiplier (5px roughly equals 0.6)
              justifyContent: 'center' 
            }}
          >
            <Grid item xs={12}>
              <Typography 
                variant="h5" 
                sx={{
                  pt: 1.2,
                  color: '#003569',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  backgroundColor: 'white',
                  textShadow: '-1px 0 #8C92B4, 0 3px #8C92B4, 1px 0 #8C92B4, 0 -1px #8C92B4',
                  fontSize: { xs: '23px', sm: '30px', md: '35px', lg: '40px', xl: '45px' },
                  // Handle responsive text shadows
                  sx: (theme) => ({
                    [theme.breakpoints.down('sm')]: {
                      textShadow: '-1px 0 #8C92B4, 0 1px #8C92B4, 1px 0 #8C92B4, 0 -1px #8C92B4',
                    }
                  })
                }}
              >
                CFC Hardwood Floors LLC
              </Typography>
            </Grid>

            <Grid container direction="row" alignItems="center">
              <Grid item xs={12}>
                <Typography 
                  variant="h6"
                  sx={{
                    px: 0.6,
                    backgroundColor: '#ffcc00',
                    color: '#003569',
                    textAlign: 'center',
                    opacity: 1,
                    borderBottom: '2px solid #003569',
                    borderTop: '2px solid #003569',
                    fontSize: { xs: '11px', sm: '20px' }
                  }}
                >
                  Please enter the following information and we reach out with a quote and/or for more information.
                </Typography>
              </Grid>
            </Grid>

            {/* Sub-Container Background Area */}
            <Grid 
              container 
              sx={{
                backgroundImage: `url(${CofCLogoSmall})`,
                backgroundSize: { xs: '300px 500px', sm: 'cover' }
              }}
            >
              <Grid item xs={12}>
                <Box 
                  sx={{
                    backgroundColor: 'white',
                    opacity: 0.85,
                    p: { xs: '2px', sm: '10px' }
                  }}
                >
                  <Box sx={{ minHeight: '16px' }} /> {/* Cleaner alternative to <br /> */}
                  
                  <Grid container direction="row" alignItems="center" spacing={1}>
                    <Grid item xs={12}>
                      <Typography 
                        variant="h6"
                        sx={{
                          fontWeight: 'bold',
                          fontSize: { xs: '17px', sm: '22px' }
                        }}
                      >
                        Please supply your name:
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Field component={FormikTextField} variant="outlined" label="Name" size="small" name="customername" fullWidth />
                    </Grid>

                    <Grid item xs={12}>
                      <Typography 
                        variant="h6"
                        sx={{
                          fontWeight: 'bold',
                          fontSize: { xs: '17px', sm: '22px' }
                        }}
                      >
                        Please enter a valid email address (or phone number):
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Field component={FormikTextField} variant="outlined" label="Email" size="small" name="to_email" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                      <Field component={FormikTextField} variant="outlined" label="Phone" size="small" name="customerphone" fullWidth />
                    </Grid>

                    <Grid item xs={12}>
                      <Typography 
                        variant="h6"
                        sx={{
                          fontWeight: 'bold',
                          fontSize: { xs: '17px', sm: '22px' }
                        }}
                      >
                        Please let us know what we can do to help:
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Field component={FormikTextField} multiline variant="outlined" label="Comments" size="small" name="comments" fullWidth minRows={3} />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>

            {/* Submit Button Grid Area */}
            <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
              <Button 
                type="submit" 
                disabled={isSubmitting} 
                variant="contained"
                sx={{
                  width: '90%',
                  backgroundColor: 'green',
                  fontSize: '25px',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'darkgreen',
                  },
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Info'}
              </Button>
            </Grid>

            <Grid item xs={12} sx={{ my: 1 }}>
              <Box component="hr" sx={{ borderColor: 'rgba(0, 0, 0, 0.12)' }} />
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}
