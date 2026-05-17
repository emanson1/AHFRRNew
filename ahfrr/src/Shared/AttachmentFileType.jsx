import React from 'react';
import { withStyles, Typography, MenuItem,Grid } from '@mui/material ';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileWord, faFileExcel, faFilePowerpoint, faFilePdf, faUser, faFile, faStickyNote } from '@fortawesome/free-solid-svg-icons';
const styles = (theme) => ({
    menuItem: {

    },
    panelButtonText: {
		color: (theme.palette.type === 'light') ? 'black' : 'white',
		[theme.breakpoints.down(600)]: {
			display: 'none',
			paddingLeft: 10,
			
		},
    },
    panelButtonIcon: {
        [theme.breakpoints.up(600)]: {
            padding: 1,
            fontSize:'3em',
         //   display: 'none',
		},

    },
});

class AttachmentFileType extends React.Component {
  
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                {this.props.extension.trim().toLowerCase()==='txt' && <FontAwesomeIcon className={classes.panelButtonIcon} icon={faStickyNote} />} 
                {(this.props.extension.trim().toLowerCase()==='doc' || this.props.extension.trim().toLowerCase()==='docx') && <FontAwesomeIcon className={classes.panelButtonIcon} icon={faFileWord} />} 
                {(this.props.extension.trim().toLowerCase()==='xls' || this.props.extension.trim().toLowerCase()==='xlsx') && <FontAwesomeIcon className={classes.panelButtonIcon} icon={faFileExcel} />} 
                {(this.props.extension.trim().toLowerCase()==='ppt' || this.props.extension.trim().toLowerCase()==='pptx') && <FontAwesomeIcon className={classes.panelButtonIcon} icon={faFilePowerpoint} />}
                {this.props.extension.trim().toLowerCase()==='pdf' && <FontAwesomeIcon className={classes.panelButtonIcon} icon={faFilePdf} />}
            </React.Fragment>
            );
    }
}

AttachmentFileType.propTypes = {
    icon: PropTypes.any,
    classes: PropTypes.object,
    extension:PropTypes.string,

};


export default (withStyles(styles, { withTheme: true })(AttachmentFileType));