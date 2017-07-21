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
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
const style = {
  marginRight: 20,
  marginTop:30
};


export default class AddNewSummary extends React.Component{

	state={
		openDialogue:false,
		cellValues:'',
		cellComments:'',
    value:'',
    items:[]
	}

	openDialogueBar=()=>{
		this.setState({openDialogue:true});
    $.ajax({
      url:'http://localhost:3000/api/v1/trackSetting',
      type:'GET',
      contetntType:'application/json',
      success: function(data){
         console.log('server connected from Add Track for get');
         console.log(data);
           // this.setState({trackData:data.message});
           for (let i = 0; i < data.message.length; i++ ) {
                this.state.items.push(<MenuItem value={data.message[i].trackName} key={i} primaryText={data.message[i].trackName} />);
              }
console.log("items");
  // console.log(items);
      }.bind(this),
      error:function(err){
        console.log('server not connected from Add track');
      }.bind(this)
    });
    console.log("Drop down for track in CellSummary");
	}

	handleClose=()=>{
		this.setState({openDialogue:false});
	}

	// handleCellNameChange=(e)=>{
	// 	this.setState({cellNames:e.target.value})
	// }

	handlecellValueChange=(e)=>{
		this.setState({cellValues:e.target.value});
	}

	handleCellCommentChange=(e)=>{
		this.setState({cellComments:e.target.value});
	}

	handleConstructSubmit=(e)=>{
		 e.preventDefault();
     // this.setState({cellID:this.state.cellID+1})
     var _id=Date.now();
		var obj={
			_id:_id,
			cellValue:this.state.cellValues,
			cellName:this.state.value,
			cellComment:this.state.cellComments
		};
		console.log("object Detail in Add Construct"+ obj.cellValue+obj.cellName+obj.cellComment+obj._id);
		this.props.handleConstructSubmitData(obj);
		this.setState({cellValues:'',cellNames:'',cellComments:'',openDialogue:false});

	}

  handleDrpDwnChange = (event, index, value) => this.setState({value});

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
         {/* <TextField
                         hintText="Track Name"
                         floatingLabelText="Enter Track Name"
                         value={this.state.cellNames}
                         onChange={this.handleCellNameChange}
                     />*/}
            <DropDownMenu maxHeight={300} value={this.state.value} 
            onChange={this.handleDrpDwnChange}
            style={{width:'300px'}}
            >
        {this.state.items}
      </DropDownMenu>
            <br />
            <TextField
               hintText="Estimated Per Day Value"
               floatingLabelText="Enter Estimated Per Day Value"
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