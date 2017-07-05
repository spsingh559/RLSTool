import React from 'react';
import ReactDOM from 'react-dom';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import ActionDone from 'material-ui/svg-icons/action/done';
import ContentClear from 'material-ui/svg-icons/content/clear';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import Snackbar from 'material-ui/Snackbar';

export default class EachNewSummaryTable extends React.Component{

	state={
		editStatus:false,
		cellName:this.props.cellName,
		cellValue:this.props.cellValue,
		cellComment:this.props.cellComment,
		openSnackBar:false
	}

	editTblRow=()=>{
		// e.preventDefault();
		this.setState({editStatus:true});
	}

	editCancel=()=>{
		this.setState({editStatus:false});
	}
	editSave=()=>{
		// e.preventDefault();
		//alert('Save buttonn clicked');
		
		console.log("cell id from Add Constuct table"+this.props.cellID );
		var obj={
			cellName:this.state.cellName,
			cellValue:this.state.cellValue,
			cellComment:this.state.cellComment
		};
		console.log("inside  edit"+"obj detail"+ obj.cellName+" "+obj.cellValue );
		var cellID=this.props.cellID;
		this.props.editDetail(obj,cellID);
		// this.setState({cellName:'',cellValue:'',cellComment:''});
		this.setState({editStatus:false});
		this.setState({cellName:'',cellValue:'',cellComment:''});
	}

	removeTblRow=()=>{
		var cellID=this.props.cellID;
		this.props.removeDetail(cellID);
		this.setState({openSnackBar:true});
	}

	handleCellNameChange=(e)=>{
		this.setState({cellName:e.target.value});
	}

	handleCellValueChange=(e)=>{
		this.setState({cellValue:e.target.value});
	}

	handleCellCommentChange=(e)=>{
		this.setState({cellComment:e.target.value});
	}

	handleClose=()=>{
		this.setState({openSnackBar:false});
	}

	render(){

		if(this.state.editStatus==false){
		return(
			
			<TableRow >
                <TableRowColumn>{this.props.cellName}</TableRowColumn>
                <TableRowColumn >{this.props.cellValue}</TableRowColumn>
                <TableRowColumn >{this.props.cellComment}</TableRowColumn>
                <TableRowColumn >
                <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
      <MenuItem primaryText="Edit" onTouchTap={this.editTblRow}/>
      <MenuItem primaryText="Remove" onTouchTap={this.removeTblRow}/>
    </IconMenu>
    </TableRowColumn>

              </TableRow>

        
			)}
		else{
			return(
			<TableRow >
                <TableRowColumn>
                <TextField
      hintText="Cell Name"
      floatingLabelText="Edit Cell Name"
      value={this.state.cellName}
      onChange={this.handleCellNameChange}
    />
                </TableRowColumn>
                <TableRowColumn>
                	<TextField
      hintText="Cell Value"
      floatingLabelText="Edit Cell Value"
      value={this.state.cellValue}
      onChange={this.handleCellValueChange}
    />
                </TableRowColumn>
                <TableRowColumn>
                	<TextField
      hintText="Cell Comment"
      floatingLabelText="Edit Cell Comment"
      value={this.state.cellComment}
      onChange={this.handleCellCommentChange}
    />
      		 </TableRowColumn>
                <TableRowColumn>
                <IconButton touch={true} onTouchTap={this.editSave} >
     			 <ActionDone color={blue500}/>
   				 </IconButton>
    
                <IconButton touch={true} onTouchTap={this.editCancel} >
     			 <ContentClear color={red500}/>
   				 </IconButton>
    </TableRowColumn>
              </TableRow>);
		}
	}

}