import React, { Component } from 'react';
import { Typography, Button, Grid } from '@mui/material ';
import withStyles from '@mui/material /styles/withStyles';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { faTrash, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import AttachmentFileType from '../Shared/AttachmentFileType';
//import { convertPdfToPng, downloadAttachFile } from '../actions/pmdwrFormActions';
//import RNFetchBlob from 'rn-fetch-blob';
//  import RNFS from 'react-native-fs';
import { TextField as FormikTextField, Select } from 'formik-material-ui';
import { Formik, Form, Field, withFormik } from 'formik';
const styles = theme => ({
	highlight: { color: theme.palette.secondary.main },
	link: { color: theme.palette.primary.main },
	container: { margin: theme.spacing(3) },
	spacer: { margin: theme.spacing() },
	fieldTitleClass: { fontWeight: 'bold', paddingLeft: 5 },
	field: {
		color: theme.palette.text.primary + '!important',
	},
	displayLarge: {
		[theme.breakpoints.down(1700)]: {
			display: 'none',
		},
	},
	delIcon: {
		fontSize: '2em',
	},
	displaySmall: {
		fontSize: 16,
		fontWeight: 'bold',
		[theme.breakpoints.up(1700)]: {
			display: 'none',
		},
	},
	textAlignLeft: {
		textAlign: 'left',
	},
	delButtonPaddingLeft: {
		paddingLeft: 2,
	},
	textAlignCenter: {
		textAlign: 'center',
	},
	textAlignRight: {
		textAlign: 'right',
		paddingRight: 20,
	},
	buttonPadding: {
		margin: '2px',
	},
	appBarBorder: {
		border: (theme.palette.type === 'light') ? '#154463 3px solid' : '#7ab2f2 3px solid',
	},
	borderBottom: {
		borderBottom: (theme.palette.type === 'light') ? '#154463 3px solid' : '#7ab2f2 3px solid',
	},
	paperClass: {
		marginTop: 20,
		marginBottom: 20,
		marginLeft: 20,
		marginRight: 20,
		paddingTop: 20,
		paddingBottom: 20,
		paddingLeft: 20,
		paddingRight: 20,
		border: (theme.palette.type === 'light') ? '#154463 3px solid' : '#7ab2f2 3px solid',
		//boxShadow: (theme.palette.type === 'light') ? '10px 10px 8px #005288':'10px 10px 8px #79C2E2',	

	},
	minWidthButton:{
		minWidth:'100%',
	},
	expansionPanelHeader:
	{
		color: (theme.palette.type === 'light') ? '#154463' : 'white',
		fontWeight: 'bold',
	},
	paddingTop: {
		paddingTop: 20,
	},
	paddingBottom: {
		paddingBottom: 20,
	},
	paddingTopTitle: {
		paddingTop: 40,
	},
	fieldPadding:
	{
		paddingRight: 10,
	},
	noShowSmall: {
		[theme.breakpoints.down(1280)]: { display: 'none' },
	},
	noShowLarge: {
		[theme.breakpoints.up(1280)]: { display: 'none' },
	},
	additionalTitleOffset: {
		position: 'relative',
		top: -(theme.spacing(1)),
		left: theme.spacing(1),
	},
	bold:{
		fontWeight:'bold'
	}
});

class Attachments extends Component {
	state = {
		collapsedPanels: [],
		index: 0,
		info: [],
		userName: 'Edward Anson (J1379)',
		flipState: false,
		uploadWindow: false,
		fileName: '',
		uploadAttachment: false
		// approvers: [],s
	};
	
	ImageBase64 (data, index, imageName) { return <React.Fragment><img id={`Image${index}`} src={`${data}`} alt={imageName} style={{ maxHeight: 65, maxWidth: 65 }} /></React.Fragment>};

	isReadOnly = () => {
		return false;

	};

	saveBlobAsFile(base64, fileName) {
		var link = document.createElement('a');

		document.body.appendChild(link); // for Firefox

		link.setAttribute('href', base64);
		link.setAttribute('download', fileName);
		link.click();


	}
	expandImage = sketch => () => {
		const imageVal = sketch.Data;
		var image = new Image();
		image.src = imageVal;
		var w = window.open('');
		w.document.write(image.outerHTML);
	};
	getBase64(file, cb) {
		let reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = function () {
			cb(reader.result);
		};
		reader.onerror = function (error) {
			console.log('Error: ', error);
		};
	}


	isFilePresent = () => {
		if (!this.state.file) {
			return true;
		}
		else {
			return false;
		}
	};
	uploadAttachment = async (event, values) => {
		var file = this.state.file;
		if (file.name) {
			const fileExists = values.attachments.find(a => { return a.FileName === file.name; });
			
			if (!(fileExists)) {
				let attachBase64 = '';



				this.getBase64(file, (result) => {
					attachBase64 = result;
					var attachments = values.attachments;
					var attachment = {
						'FileName': file.name,
						'Data': attachBase64,
						'Id': '-1',
						'RequestId': values.Id,
					};
					// 		if (file.name.substring(file.name.length-3).toLowerCase().trim()==='pdf')
					// 		{
					// //			attachment=this.pdfToPng(values, attachment);
					// 		}
					// else
					// {s

					
					if (attachments.length>2)
					{
						alert("Please upload a maximum of three (3) images.")
						return;
					}	
					// if (
					// 	(attachment.FileName.substring(attachment.FileName.lastIndexOf('.') + 1, attachment.FileName.length).toLowerCase() !== 'png')
					// && (attachment.FileName.substring(attachment.FileName.lastIndexOf('.') + 1, attachment.FileName.length).toLowerCase() !== 'jpg')
					// && (attachment.FileName.substring(attachment.FileName.lastIndexOf('.') + 1, attachment.FileName.length).toLowerCase() !== 'jpeg')
					// && (attachment.FileName.substring(attachment.FileName.lastIndexOf('.') + 1, attachment.FileName.length).toLowerCase() !== 'gif')
					// )
					// {
					// 	alert("Please only upload an image file.")
					// 	return;
					// } 
				
					attachments.push(attachment);

					values.attachments = attachments;
					this.setState({ 'uploadWindow': false });
					//	}	

				});


			}
			else { alert('This attachment is already present.'); }
		}
		this.setState({ uploadWindow: false });
	};

	toggleUploadWindow = () => {
		const upVal = !this.state.uploadWindow;
		this.setState({ uploadWindow: upVal });
	};
	onDelButtonAttachmentClick = (index, values) => {
		var images = values.attachments;
		images.splice(index, 1);
		values.Attachments = images;
		this.setState({ Attachments: images });
	};
	render() {
		const { classes } = this.props;

		return (

			<React.Fragment>
				{this.state.uploadWindow && this.props.values.attachments &&
					<React.Fragment><Grid container className={classes.root} margin={20} spacing={16}>

	
						<Grid lg={12} xs={12} >
							<Grid container direction='row' className={[classes.paddingTopLarge, classes.paddingLeft].join(' ')}>
								<Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
									
											<input
												id='sketchFile'
												accept='*/*'
												name='sketchFile'
												type='file'
												hidden
												onChange={(e) => {
													this.props.setFieldValue('file', e.target.files[0]);
													this.setState({ 'fileName': e.target.files[0].name });
													this.setState({ 'file': e.target.files[0] });
												}}
											/>
											<label htmlFor='sketchFile'>
												<Button disabled={this.props.isReadOnly} variant='contained' color='primary' component='span'>
													Add File
												</Button>
												<span className={[classes.fileName, classes.paddingLeft].join(' ')}>{(this.state.fileName) || ''}</span>
											</label>
											<Typography className={classes.group} variant='p'><br /><br /><b></b></Typography>
											<Button disabled={this.isFilePresent()} variant='contained' className={classes.paddingLeft} color='primary' onClick={(e) =>  this.uploadAttachment(e, this.props.values)}>
												Upload
											</Button>
											<Button variant='contained' color='primary' className={classes.paddingLeft} onClick={() => this.toggleUploadWindow()}>
												Cancel
											</Button>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					<Grid xl={12} lg={12} md={12} sm={12} xs={12}>
							<div className={classes.displayLarge}><Typography variant='h5' className={[classes.paddingLeft, classes.paddingTop].join(' ')} ><Button className={classes.minWidthButton} variant='contained' color='primary' onClick={() => this.toggleUploadWindow()}>View Attachments</Button></Typography></div>
							<div className={[classes.paddingLeft, classes.paddingTop, classes.displaySmall].join(' ')} ><Button className={classes.minWidthButton} variant='contained' color='primary' onClick={() => this.toggleUploadWindow()}>View Attachments</Button></div>
						</Grid>

					</React.Fragment>}

				{!this.state.uploadWindow && this.props.values.attachments && this.props.values.attachments.map((attach, index) => {
					return (
						attach.FileName !== undefined && <React.Fragment>
							<div>
								<Grid container direction='row' >
									<Grid xl={12} lg={12} xs={11}>
										<Grid container direction='row' className={[classes.paddingBottomLarge, classes.paddingLeft].join(' ')}>
											<Grid item xs={4} sm={4} md={4} lg={4} xl={4} className={[classes.bold, classes.alignTop, classes.fileName].join()}>
												<span className={[classes.bold, classes.fileNameFont].join(' ')}>({index + 1})&nbsp;{attach.FileName.replace(' ','\xa0')}</span>
											</Grid>
											<Grid item xs={4} sm={4} md={4} lg={4} xl={4} className={[classes.bold, classes.alignTop, classes.fileName].join()}>
												<span className={[classes.bold, classes.fileNameFont].join(' ')}>&nbsp;{attach.Description}</span>
											</Grid>
											<Grid item xs={2} sm={2} md={2} lg={2} xl={2} className={[classes.alignTop, classes.alignRight].join(' ')}>
												{((attach.FileName.substring(attach.FileName.lastIndexOf('.') + 1, attach.FileName.length).toLowerCase() === 'png')
													|| (attach.FileName.substring(attach.FileName.lastIndexOf('.') + 1, attach.FileName.length).toLowerCase() === 'jpg')
													|| (attach.FileName.substring(attach.FileName.lastIndexOf('.') + 1, attach.FileName.length).toLowerCase() === 'jpeg')
													|| (attach.FileName.substring(attach.FileName.lastIndexOf('.') + 1, attach.FileName.length).toLowerCase() === 'gif')) &&
													<div onClick={this.expandImage(attach)} className={classes.textAlignRight}>
														{this.ImageBase64 (attach.Data.toString(),index,attach.FileName)}
														</div>}
												{(!((attach.FileName.substring(attach.FileName.lastIndexOf('.') + 1, attach.FileName.length).toLowerCase() === 'png')
													|| (attach.FileName.substring(attach.FileName.lastIndexOf('.') + 1, attach.FileName.length).toLowerCase() === 'jpg')
													|| (attach.FileName.substring(attach.FileName.lastIndexOf('.') + 1, attach.FileName.length).toLowerCase() === 'jpeg')
													|| (attach.FileName.substring(attach.FileName.lastIndexOf('.') + 1, attach.FileName.length).toLowerCase() === 'gif'))) &&
													<div onClick={() => this.props.downloadAttachFile(attach)} className={classes.textAlignRight}><AttachmentFileType extension={attach.FileName.substring(attach.FileName.lastIndexOf('.') + 1).toLowerCase().trim()} /></div>}
											</Grid>
											<Grid item xs={1} sm={1} md={1} lg={1} xl={1}>  <div className={classes.delIcon} onClick={() => this.saveBlobAsFile(attach.Data, attach.FileName)}><FontAwesomeIcon className={classes.panelButtonIcon} icon={faArrowAltCircleDown} /></div></Grid>
											<Grid item xs={1} sm={1} md={1} lg={1} xl={1}>  {!this.isReadOnly() && <div className={classes.delIcon} onClick={() => this.onDelButtonAttachmentClick(index, this.props.values)}><FontAwesomeIcon className={classes.panelButtonIcon} icon={faTrash} /></div>}
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</div>
						</React.Fragment>);
				})
				}
								{!this.state.uploadWindow && this.props.values.attachments &&
					<Grid container className={classes.root} margin={20} spacing={16}>
						<Grid xl={12} lg={12} md={12} sm={12} xs={12}>
							<div className={classes.displayLarge}><Typography variant='h5' className={[classes.paddingLeft, classes.paddingTop].join(' ')} >
								{!this.isReadOnly() && <Button className={classes.minWidthButton} variant='contained' color='primary' onClick={() => this.toggleUploadWindow()}>Upload Pictures/Documents</Button>}
							</Typography></div>
							<div className={[classes.paddingLeft, classes.paddingTop, classes.displaySmall].join(' ')} >
								{!this.isReadOnly() && <Button className={classes.minWidthButton} variant='contained' color='primary' onClick={() => this.toggleUploadWindow()}>Upload Pictures/Documents</Button>}
							</div></Grid>

					</Grid>}

			</React.Fragment>
		);
	}
}
Attachments.propTypes = {
	classes: PropTypes.object,
	count: PropTypes.number,
	imageName: PropTypes.string,
	data: PropTypes.object,
	index: PropTypes.number,
	values: PropTypes.object,
	isReadOnly: PropTypes.bool,
	convertPdfToPng: PropTypes.func,
	setFieldValue: PropTypes.func,
	downloadAttachFile: PropTypes.func
};
const mapDispatchToProps = (dispatch) => ({
	// convertPdfToPng: (attachPdf) => dispatch(convertPdfToPng(attachPdf)),
	// downloadAttachFile: (attach) => dispatch(downloadAttachFile(attach)),
});
export default connect(null, mapDispatchToProps)(withStyles(styles, { withTheme: true })(Attachments));
