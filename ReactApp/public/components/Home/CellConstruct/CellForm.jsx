import React from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { Button } from 'react-bootstrap';
// Integrated React Bootstrap
import { Modal } from 'react-bootstrap';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Snackbar from 'material-ui/Snackbar';
import AppBar from 'material-ui/AppBar';
// injectTapEventPlugin();



export default class App extends React.Component{
// class HelloMessage extends React.Component {

  state = {
    open: false,
    openSnackBar:false,
    projectID:'',
    projectName:''
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false,openSnackBar:false});
  };

  handlePorjectIDChange=(e)=>{
    this.setState({projectID:e.target.value});  
  };

  handlePorjectNameChange=(e)=>{
    this.setState({projectName:e.target.value});
  }

  submitProjectDetail=(e)=>{
    e.preventDefault();
    console.log(this.state.projectName);
    if (!this.state.projectID && !this.state.projectName) {
          return;
       }
       var obj={
        projectID:this.state.projectID,
        projectName:this.state.projectName
       };
       this.props.submitProjectDetail(obj);
        this.setState({open: false,openSnackBar:true,projectID:'',projectName:''});
     //  this.handleClose();
       // this.props.submitProjectName();
  }
  render() {
    const actions = [
    <Divider style={{backgroundColor:'rgb(0, 188, 212)'}}/>,
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <RaisedButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.submitProjectDetail}
      />,
    ];

    var titleBar=<AppBar
    title="Add Project Detail"
    style={{height:'auto'}}
  />

    return (
         <div>
              <RaisedButton label="Add Project" 
              primary={true} 
              style={{marginTop:'100px', marginLeft:'100px'}} 
              onTouchTap={this.handleOpen}
               />
            <Dialog
              title={titleBar}
              actions={actions}
              modal={true}
              open={this.state.open}
              onRequestClose={this.handleClose}
            >
             <TextField
                hintText="Project Name"
                floatingLabelText="Enter Project Name"
                value={this.state.projectName}
                onChange={this.handlePorjectNameChange}
            />
            <br />
            <TextField
               hintText="Project ID"
               floatingLabelText="Enter Project Unique ID"
               value={this.state.projectID}
               onChange={this.handlePorjectIDChange}
             />
             <br />         
        </Dialog>
         <Snackbar
          open={this.state.openSnackBar}
          message="Project Detail Submitted Successfully!!"
          autoHideDuration={4000}
          onRequestClose={this.handleClose}
        />
        </div>   
      );
    }
} 



// ReactDOM.render(<HelloMessage name="Jane" />,
//  document.getElementById('BindMainComponent'));