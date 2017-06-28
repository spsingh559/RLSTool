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
//const ID;
import EachConstructTable from './EachConstructTable.jsx';

export default class AddConstructTable extends React.Component{

	state={
		selectable: false,
		showCheckboxes: false,
		stripedRows: true,
		editStatus:false,
		cellNames:'',
		cellValues:'',
		cellComments:''
	}

  editDetails=(obj,cellID)=>{
    console.log("obj in Add Construct"+obj.cellID);
    this.props.editDetailTblRow(obj,cellID);
  }

  removeDetails=(cellID)=>{
  	this.props.removeDetailTblRow(cellID);
  }
	// editCellRow=()=>{
	// 	alert('Edit Clicked');
	// 	this.setState({editStatus:true});
	// }

	// deleteCellRow=()=>{
	// 	alert('Delete Clicked');
	// }

	// editSave=()=>{
	// 	this.setState({editStatus:false});
	// 	alert('Edit Save Clicked');
	// 	var obj={
	// 		cellName:this.state.cellNames,
	// 		cellValue:this.state.cellValues,
	// 		cellComment:this.state.cellComments,
	// 	//	cellID:this.props.
	// 	}

	// 	console.log(obj);

	// 	//this.props.EditCellData(obj);
	// }

	// handleCellNameChange=(e)=>{
	// 	this.setState({cellNames:e.target.value});
	// }

	// handleCellValueChange=(e)=>{
	// 	this.setState({cellValues:e.target.value});
	// }

	// handleCellCommentChange=(e)=>{
	// 	this.setState({cellComments:e.target.value});
	// }

	render(){
	console.log(this.props.cellData);	
		if(this.props.cellData.Length!=0){
		var projectData = this.props.cellData.map(function(cellData,index) {
	      return (      	
	      	<div key={index}>
	        <EachConstructTable 
	        cellName={cellData.cellName}
	        cellValue={cellData.cellValue}
	        cellComment={cellData.cellComment}
          cellID={cellData.cellID}
          editDetail={this.editDetails}
          removeDetail={this.removeDetails}
	        />  
	         </div>      
	        
	      );
	    }.bind(this));
	}
	
		return(				
			<Table
			selectable={this.state.selectable}
      style={{height:'auto'}}
			>
   				 <TableHeader >
					<TableRow >
						<TableHeaderColumn >Cell Name</TableHeaderColumn>
						<TableHeaderColumn>Cell Value</TableHeaderColumn>
       					<TableHeaderColumn>Comment</TableHeaderColumn>
       					<TableHeaderColumn>Action</TableHeaderColumn>
      				</TableRow>
   				 </TableHeader>
  				 <TableBody displayRowCheckbox={this.state.showCheckboxes}>
  				  {projectData}
							
				</TableBody>
				</Table>
			);
	}
}