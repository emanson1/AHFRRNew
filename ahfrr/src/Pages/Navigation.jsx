import React, { useState } from 'react';
import { SwipeableDrawer, Typography, Grid, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import HomeIcon from '@mui/icons-material/HomeWork';
import EngineeringIcon from '@mui/icons-material/Engineering';
import CameraIcon from '@mui/icons-material/CameraAlt';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AHFRRLogoSmall from '../Images/AHFRR Logo.png';
import { showModal, hideModal } from '../actions/ahfrrActions';
import { connect } from 'react-redux';
import { blue } from '@mui/material/colors';
const useStyles = makeStyles((theme) => ({
    iconSize: {
        color: '#003569',
        transform: 'scale(11.0)',
        paddingRight: 20,
        paddingLeft: 20,
        transform: 'scale(2.0)',
    },
    iconGrid: {
        height: 50
    },
    TitleClass: {
        color: '#003569',
        textAlign: 'center',
        fontWeight: 'bold',
        textShadow: '-1px 0 #8C92B4, 0 3px #8C92B4, 1px 0 #8C92B4, 0 -1px #8C92B4',
        paddingTop: 15,
        fontSize: 30,
    },
    subContainerBackground: {
        backgroundImage: `url(${AHFRRLogoSmall})`,
        backgroundSize: 'cover',
    },
    subContainerOpacity: {
        backgroundColor: 'white',
        opacity: '90%',
            },
    navClass: {
        minHeight: 500
    },
    quoteButton: {
        fontWeight: 'bold',
        minWidth: '100%',
        textAlign: 'center',
        backgroundColor: 'yellow',
        fontSize:20
    },
    quoteButtonContainer: {
        minWidth: 200,
        textAlign: 'center',
        padding: 20
    },
    linkClass: {
        textDecoration: 'none',
        fontWeight: 'bold',
        color: '#003569',
        fontWeight: 'bold',
        textShadow: '-1px 0 blue, 0 3px yellow, 1px 0 #8C92B4, 0 -1px #8C92B4',
        fontSize: 24
    },
    navClass:{
        border: '5px solid #8C92B4',
        borderRadius: 5

    }
}))
const Navigation = (props) => {
    const { open, setOpen, setCurWindow, Home, Services, Gallery } = props;
    const classes = useStyles();
    var openModal = (modalProps) => {
        props.showModal(modalProps);
    }
    const openWindow = (curWin) =>
    {
        setOpen(false);
        setCurWindow(curWin);
    }
    const top =

        <Grid container className={classes.navClass}>
            <Grid item xs={12}>
                <Typography variant={'h2'} className={classes.TitleClass}>
                    CFC Hardwood Floors LLC<hr/>
                </Typography>
            </Grid>
            <Grid container className={classes.subContainerBackground}>
                <Grid item xs={12}>
                    <Grid container className={classes.subContainerOpacity}>
                        <Grid item xs={12}>
                        <Grid item xs={12}>
                            <Grid container className={classes.quoteButtonContainer}>
                               <br/>
                            </Grid>
                        </Grid>
                            <a className={classes.linkClass} href="#" onClick={() => openWindow(Home)}>
                                <Grid container>
                                    <Grid className={classes.iconGrid} item xs={2}>
                                        <HomeIcon className={classes.iconSize} />
                                    </Grid>
                                    <Grid item xs={10}>
                                        Home
                                    </Grid>
                                </Grid>
                            </a>
                        </Grid>
                        <Grid item xs={12}>
                            <a className={classes.linkClass} href="#" onClick={() => openWindow(Services)}>
                                <Grid container>
                                    <Grid className={classes.iconGrid} item xs={2}>
                                        <EngineeringIcon className={classes.iconSize} />
                                    </Grid>
                                    <Grid item xs={10}>
                                        Services
                                    </Grid>
                                </Grid>
                            </a>
                        </Grid>
                        <Grid item xs={12}>
                            <a className={classes.linkClass} href="#" onClick={() => openWindow(Gallery)}>
                                <Grid container>
                                    <Grid className={classes.iconGrid} item xs={2}>
                                        <CameraIcon className={classes.iconSize} />
                                    </Grid>
                                    <Grid item xs={10}>
                                        Gallery
                                    </Grid>
                                </Grid>
                            </a>
                        </Grid>
                        <Grid item xs={12}>
                            <a className={classes.linkClass} href="https://www.facebook.com/people/CFC-Hardwood-Floors-LLC/100067691010274/" target="_blank">
                                <Grid container>
                                    <Grid className={classes.iconGrid} item xs={2}>
                                        <FacebookIcon className={classes.iconSize} />
                                    </Grid>
                                    <Grid item xs={10}>
                                        Facebook
                                    </Grid>
                                </Grid>
                            </a>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container className={classes.quoteButtonContainer}>
                                <a onClick={() => openModal({ open: true, modalType: 'quoteModal', data: {} })}>
                                    <Button className={classes.quoteButton} variant="contained" >Request Quote</Button>
                                </a>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    return (
        <React.Fragment>
            <React.Fragment key={'top'}>
                <SwipeableDrawer
                    anchor={'top'}
                    open={open}
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                >{top}
                </SwipeableDrawer>
            </React.Fragment>
        </React.Fragment>
    );
};
const mapStateToProps = (state) => ({
    modalProps: state.ahfrr.modalProps
});

const mapDispatchToProps = (dispatch) => ({
    showModal: (modalProps, modalTypes) => dispatch(showModal(modalProps, modalTypes)),
    hideModal: () => dispatch(hideModal()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
