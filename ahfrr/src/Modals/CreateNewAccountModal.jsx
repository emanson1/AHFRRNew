import React, { useState } from 'react';
import {Grid, Box} from '@material-ui/core';
import * as Yup from 'yup';
import '../App.css';
import CloseIcon from '@material-ui/icons/Close';
import { Formik, Form, Field, withFormik } from 'formik';
import { TextField as FormikTextField, Select } from 'formik-material-ui';

export default function CreateNewAccountModal (props) {
  const {modalProps, handleClose}=props;
  const {background, regUsers, setRegUsers, setLoggedIn, setCreated}=modalProps;
  const [emailExists, setEmailExists] = useState(false);
  
  const divImage=props.divImage;
  const getSchema = () => {
    const yupObj=Yup.object().shape({
      email: Yup.string().email('Must be a valid email address').max(255).required('Email is required'),
      password: Yup.string().min(6).max(14).required("Required"),
      firstname: Yup.string()
        .required("Required"),
      lastname: Yup.string()
        .required("Required"),
  
    });
    return yupObj
  }
  const createAccount = (values, regUsers, setRegUsers, setLoggedIn) => 
  {
      const user=regUsers.find(a=>a.email===values.email);
      let _regUsers=regUsers;
      if (user!==undefined)
      {
        setEmailExists(true);
      }
      else
      {
        _regUsers.push({email:values.email, password:values.password});
        setRegUsers(_regUsers);
        setCreated(true);
        handleClose();

      }

  }
  return(
    <div style={{backgroundColor:'#444c4f', minWidth:'420px'}}>
    <Grid container className={'modalContainer'}>
  <Grid item xs={1}>
<CloseIcon className='white' onClick={handleClose}/>
</Grid>
<Grid item xs={10}>
     <div className={'modalTitle'}>&#169; Pinch Street LLC.</div>
  </Grid>
</Grid>

    <Grid container direction="row" justify="center" alignItems="center">
          <Grid xs={12} className={'modalType'} item >Please create an account:</Grid>
          </Grid>
          <Box style={divImage} >
            <div className={'modalLoginText'}> 
             <Formik
    initialValues={{ email: '', password: '' }}
   // onSubmit={ (values)=>alert("here")}
    onSubmit={ (values)=>createAccount(values)}
    validationSchema={getSchema()}
      >{({
        values,
        touched,
        errors,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
      /* and other goodies */
    }) => (
      
     <Form><div style={{position: 'relative', bottom: '0', left: '0', width:'100%' }}>
     <Grid container>
        {/* <Grid xs={12} lg={4} style={{verticalAlign:'bottom'}}>
      User Name:
      </Grid> */}
      <Grid xs={12}>
      <Field component={FormikTextField}
        variant="outlined"
        label="First Name"
        margin="dense"
        name="firstname"
        fullWidth 
        />
      </Grid>
      </Grid>
      <Grid container>
        {/* <Grid xs={12} lg={4}>
      Password:
      </Grid> */}
      <Grid xs={12}>
        <Field component={FormikTextField}
        variant="outlined"
        label="Last Name"
        margin="dense"
        name="lastname"
        fullWidth 
        />
        </Grid>
      
      
        </Grid>
     <Grid container>
        {/* <Grid xs={12} lg={4} style={{verticalAlign:'bottom'}}>
      User Name:
      </Grid> */}
      <Grid xs={12}>
      <Field component={FormikTextField}
        variant="outlined"
        label="Email Address"
        margin="dense"
        name="email"
        fullWidth 
        onClick={()=>setEmailExists(false)}
        />
        {emailExists && <div style={{color:"red",fontWeight:"bold",textAlign:"center"}}>This user account already exists. </div>}
      </Grid>
      </Grid>
      <Grid container>
        {/* <Grid xs={12} lg={4}>
      Password:
      </Grid> */}
      <Grid xs={12}>
        <Field component={FormikTextField}
        type="password"
        variant="outlined"
        label="Password"
        margin="dense"
        name="password"
        fullWidth 
        />
        </Grid>
      
      
        </Grid>
      <Grid container>
      <Grid xs={12}>
        {values.password && values.email && !(errors.email) && values.firstname && values.lastname && 
        <div><button onClick={()=>createAccount(values, regUsers, setRegUsers, setLoggedIn)}type="button" style={{backgroundColor:'#49b64a', border:'0px solid #444c4f', fontWeight:'bold', width:'100%', height:'30px', color:'#444c4f', fontSize:'14pt'}}>
          Login
        </button></div>}
        <br/>
      </Grid>
      </Grid></div>
</Form>)}
     </Formik>
     </div></Box>
            </div>
            )
    };
