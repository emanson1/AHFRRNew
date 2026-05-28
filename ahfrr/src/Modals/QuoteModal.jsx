import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField as FormikTextField } from 'formik-material-ui';
import * as Yup from 'yup';
import { Grid, Typography, Button, Box } from '@mui/material'; 
import AHFRRLogoSmall from '../Images/AHFRR Logo.png';
import emailjs from '@emailjs/browser';

export default function QuoteModal(props) {
  const { handleClose } = props;
  const SERVICE_ID = (typeof process !== 'undefined' && process.env?.REACT_APP_EMAILJS_SERVICE_ID) || '';
  const TEMPLATE_ID = (typeof process !== 'undefined' && process.env?.REACT_APP_EMAILJS_TEMPLATE_ID) || '';
  const PUBLIC_KEY = (typeof process !== 'undefined' && process.env?.REACT_APP_EMAILJS_PUBLIC_KEY) || '';
// forcing a check in of this file
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
            content: attachments[x].Data.split(','),
            encoding: 'base64',
            contentType: fileType,
          });
        }
      }
      values.attachmentStr = attStr;
      let emailaddress = values.to_email;
      if (!emailaddress || emailaddress.length === 0) {
        values.to_email = 'floorman446@gmail.com';
      }
    console.log('SERVICE_ID:' + SERVICE_ID + ' -  TEMPLATE_ID:' + TEMPLATE_ID + '  -   PUBLIC_KEY:' + PUBLIC_KEY);

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
        <Form style={{ width: '100%' }}>
          {/* Main Grid Wrapper - Configured with width: '100%' */}
          <Grid 
            container 
            sx={{ 
              overflow: 'hidden', 
              border: '2px solid #ffcc00', 
              p: 0.6, 
              width: '100%',
              backgroundColor: 'white'
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
                }}
              >
                Artisan Hardwood Floor Refinishing
              </Typography>
            </Grid>

            <Grid container direction="row" sx={{ width: '100%' }}>
              <Grid item xs={12}>
                <Typography 
                  variant="h6" 
                  sx={{
                    px: 0.6,
                    backgroundColor: '#ffcc00',
                    color: '#003569',
                    textAlign: 'center',
                    borderBottom: '2px solid #003569',
                    borderTop: '2px solid #003569',
                    fontSize: { xs: '11px', sm: '20px' }
                  }}
                >
                  Please enter the following information and we reach out with a quote and/or for more information.
                </Typography>
              </Grid>
            </Grid>

            {/* Sub-Container Background Area - Expanded to width: '100%' */}
            <Grid item xs={12} sx={{ width: '100%' }}>
              <Box 
                sx={{
                  position: 'relative',
                  width: '100%',
                  boxSizing: 'border-box',
                  p: { xs: '16px', sm: '24px' },
                  backgroundColor: 'rgba(255, 255, 255, 0.88)', 
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 0,
                    backgroundImage: `url(${AHFRRLogoSmall})`,
                    backgroundSize: { xs: '260px auto', sm: 'contain' },
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.25, 
                  }
                }}
              >
                {/* Form fields wrapper aligned to expand across full container margins */}
                <Grid container direction="row" alignItems="center" spacing={2} sx={{ position: 'relative', zIndex: 1, width: '100%', m: 0 }}>
                  <Grid item xs={12} sx={{ pl: '0px !important' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: { xs: '16px', sm: '20px' }, color: '#003569' }}>
                      Please supply your name:
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sx={{ pl: '0px !important' }}>
                    <Field component={FormikTextField} variant="outlined" label="Name" size="small" name="customername" fullWidth />
                  </Grid>

                  <Grid item xs={12} sx={{ pl: '0px !important' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: { xs: '16px', sm: '20px' }, color: '#003569' }}>
                      Please enter a valid email address (or phone number):
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sx={{ pl: '0px !important' }}>
                    <Field component={FormikTextField} variant="outlined" label="Email" size="small" name="to_email" fullWidth />
                  </Grid>
                  <Grid item xs={12} sx={{ pl: '0px !important' }}>
                    <Field component={FormikTextField} variant="outlined" label="Phone" size="small" name="customerphone" fullWidth />
                  </Grid>

                  <Grid item xs={12} sx={{ pl: '0px !important' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: { xs: '16px', sm: '20px' }, color: '#003569' }}>
                      Please let us know what we can do to help:
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sx={{ pl: '0px !important' }}>
                    <Field component={FormikTextField} multiline variant="outlined" label="Comments" size="small" name="comments" fullWidth minRows={3} />
                  </Grid>
                </Grid>
              </Box>
            </Grid>

            {/* Submit Button Grid Area */}
            <Grid item xs={12} sx={{ textAlign: 'center', mt: 3, mb: 1, width: '100%' }}>
              <Button 
                type="submit" 
                disabled={isSubmitting} 
                variant="contained" 
                sx={{ 
                  width: '95%', 
                  backgroundColor: 'green', 
                  fontSize: '22px', 
                  color: 'white', 
                  fontWeight: 'bold',
                  '&:hover': { backgroundColor: 'darkgreen' } 
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Info'}
              </Button>
            </Grid>

            <Grid item xs={12} sx={{ width: '100%' }}>
              <Box component="hr" sx={{ borderColor: 'rgba(0, 0, 0, 0.12)', m: 0, width: '100%' }} />
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}
