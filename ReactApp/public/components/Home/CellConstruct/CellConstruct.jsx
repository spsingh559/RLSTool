import React from 'react';

import AddCellConstruct from './AddCellConstruct.jsx';
import CellConstructTbl from  './CellConstructTbl.jsx';
export default class CellConstruct extends React.Component{

	state={
		cellConstructData:[],
		headerList:[]
	}
	CellConstructObj=(obj)=>{
		console.log('obj receive from source into CellConstruct');
		console.log(obj);

			// console.log(Object.keys(obj));
			// let headerList=[];

		let currentState=this.state.cellConstructData;
		console.log('current status of cellConstructData');
		console.log(currentState);
		let newData=[obj].concat(currentState);
		console.log('newData');
		 console.log(obj);
		// [obj].push(...currentState);
		// console.log('data in array');
		// console.log(obj);
			this.setState({cellConstructData:newData});
			console.log('CellConstructData');
			console.log('length of object is');
			  console.log(Object.keys(obj).length);
				console.log('object property into array');
			console.log(this.state.cellConstructData);
			this.state.headerList=Object.keys(obj)
			console.log(this.state.headerList);
	}
	render(){

		return(
			<div>
			<AddCellConstruct CellConstructObj={this.CellConstructObj}/>
			<CellConstructTbl cellConstructData={this.state.cellConstructData}
												headerList={this.state.headerList}
			 />
			</div>
			);
	}
}
