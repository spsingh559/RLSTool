import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import EachNewCellConstructData from './EachNewCellConstructData.jsx';

export default class CellConstructTbl extends React.Component {

  state={
    items:[],
    count:0
  }
  render(){
    console.log('data in CellConstructTbl');
    console.log(this.props.cellConstructData);
    // console.log(this.props.cellConstructData);
  		// if(this.props.cellConstructData.length!=0){
  		var projectData = this.props.cellConstructData.map(function(cellConstructData,index) {
  	      return (
  	      	<div key={cellConstructData._id}>
  	        <EachNewCellConstructData
            practiseName={cellConstructData.practiseName}
  	        roleName={cellConstructData.roleName}
  	        locationName={cellConstructData.locationName}
  	        bandName={cellConstructData.bandName}
            _id={cellConstructData._id}
            trackData={cellConstructData}
  	        />
  	         </div>

  	      );
  	    }.bind(this));
        let tmpList=[];

        console.log('header list in CellConstructTbl');
        console.log(this.props.headerList);
        if(this.state.count==1){
        for(let i=0; i<this.props.headerList.length-1;i++){
          this.state.items.push(<TableHeaderColumn >{this.props.headerList[i]}</TableHeaderColumn>)
        }
      }
      this.state.count++;


  		return(
        <div>
          {projectData}
        </div>
        // <Table
  			// selectable={this.state.selectable}
        // style={{height:'auto'}}
  			// >
     	// 			 <TableHeader >
  			// 		<TableRow >
  			// 			{this.state.items}
        // 				</TableRow>
     	// 			 </TableHeader>
    		// 		 <TableBody displayRowCheckbox={this.state.showCheckboxes}>
    		// 		  {projectData}
        //
  			// 	</TableBody>
  			// 	</Table>
      );
  }
}
