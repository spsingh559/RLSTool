import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import AppBar from 'material-ui/AppBar';
import _ from 'lodash';
import Divider from 'material-ui/Divider';


const style = {
  marginRight: 20,
  marginTop:30
};

const customContentStyle = {
  width: '80%',
  maxWidth: 'none',
};

export default class AddCellConstruct extends React.Component{

	state={
		openDialogue:false
	}

	openDialogueBar=()=>{
		this.setState({openDialogue:true});
	}

	handleClose=()=>{
		this.setState({openDialogue:false});
	}

	render(){

		 let titleBar=<AppBar title="Add Cell Construct" />;        

		const actions = [
       <Divider style={{backgroundColor:'rgb(0, 188, 212)'}}/>,
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.onAddingTitle}
      />,
    ];

		return(
			<div>
			<FloatingActionButton style={style}
			onTouchTap={this.openDialogueBar}
			mini={true}>
     		 <ContentAdd />
   		 </FloatingActionButton>
        <Dialog
          title={titleBar}
          actions={actions}
          open={this.state.openDialogue}
          modal={true}
          onRequestClose={this.handleClose}
          contentStyle={customContentStyle}
          autoScrollBodyContent={true}
        >

        </Dialog>
        </div>

			);
	}
}