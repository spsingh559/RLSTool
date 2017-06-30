import React from 'react';
import ReactDOM from 'react-dom';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
const style = {
  marginRight: 20,
  marginTop:30
};
export default class AddConstructCell extends React.Component{

	state={
		openDialogue:false,
		cellNames:'',
		cellValues:'',
		cellComments:'',
		cellID:0
	}

	openDialogueBar=()=>{
		this.setState({openDialogue:true});
	}

	handleClose=()=>{
		this.setState({openDialogue:false});
	}

	handleCellNameChange=(e)=>{
		this.setState({cellNames:e.target.value})
	}

	handlecellValueChange=(e)=>{
		this.setState({cellValues:e.target.value});
	}

	handleCellCommentChange=(e)=>{
		this.setState({cellComments:e.target.value});
	}

	handleConstructSubmit=(e)=>{
		 e.preventDefault();
     this.setState({cellID:this.state.cellID+1})
		var obj={
			cellID:this.state.cellID,
			cellValue:this.state.cellValues,
			cellName:this.state.cellNames,
			cellComment:this.state.cellComments
		};
		console.log("object Detail in Add Construct"+ obj.cellValue+obj.cellName+obj.cellComment+obj.cellID);
		this.props.handleConstructSubmitData(obj);
		this.setState({cellValues:'',cellNames:'',cellComments:'',openDialogue:false});

	}

	render(){

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
        onTouchTap={this.handleConstructSubmit}
      />,
    ];

      let titleBar=<AppBar
    title="Add Construct Cell"
  />;
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
          modal={true}
          open={this.state.openDialogue}
          onRequestClose={this.handleClose}
        >
          <TextField
                hintText="Cell Construct Name"
                floatingLabelText="Enter Cell Construct Name"
                value={this.state.cellNames}
                onChange={this.handleCellNameChange}
            />
            <br />
            <TextField
               hintText="Cell Construct Value"
               floatingLabelText="Enter Cell Construct Value"
               value={this.state.cellValues}
               onChange={this.handlecellValueChange}
             />
             <br />
             <TextField
               hintText="Comment"
               floatingLabelText="Enter Comment"
               value={this.state.cellComments}
               onChange={this.handleCellCommentChange}
             />
             <br />     
        </Dialog>
			</div>
			)
	}
} 