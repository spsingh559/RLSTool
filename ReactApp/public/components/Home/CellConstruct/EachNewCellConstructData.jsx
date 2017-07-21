import React from 'react';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
export default class EachNewCellConstructData extends React.Component{

state={
  obj:{},
  items:[]
}
  render(){
    console.log('data in EachNewCellConstructData');
    console.log(this.props.trackData);
    console.log(this.props.roleName);
     let obj={}
    this.state.obj=this.props.trackData;
//   let tbldata=  Object.entries(this.state.obj).forEach(
//     ([key, value]) =>  this.state.items.push(<TableRowColumn >{value}</TableRowColumn>)
// );
// console.log(tbldata)
    // foreach()
//     Object.keys(this.props.trackData).map(function(objectKey, index) {
//     var value = this.props.trackData[objectKey];
//     console.log(value);
// });
    return(
      <div style={{marginTop:'70px'}}>
       {this.props.roleName}
        {this.props.practiseName}
      </div>

      // <TableRow >
      //           <TableRowColumn >{this.props.practiseName}</TableRowColumn>
      //           <TableRowColumn >{this.props.roleName}</TableRowColumn>
      //           <TableRowColumn >{this.props.locationName}</TableRowColumn>
      //           <TableRowColumn >{this.props.bandName}</TableRowColumn>
      //
      //
      //
      //         </TableRow>
    );
  }
}
