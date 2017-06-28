import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactDOM from 'react-dom';
import Paper from 'material-ui/Paper';
import CellForm from './CellForm.jsx';
import ProjectDetail from './ProjectDetail.jsx';


export default class MainApp extends React.Component{

	state={
		projectID:'',
		projectName:'',
		data:[{'projectName':'RLS','projectID':1000}]
	};

	
	submitProjectInfo=(obj)=>{
		console.log("project  ID is"+ obj.projectID);
		// this.setState({this.state.projectID:obj.projectID, this.state.projectName:obj.projectName});
		console.log("project Name is"+ obj.projectName);
		var projObj={
			projectID:obj.projectID,
			projectName:obj.projectName
		};
		var dataCurrentState=this.state.data;
		var newPostData=[projObj].concat(dataCurrentState);
		this.setState({data:newPostData});
	}

	// submitCellInfo=(obj)=>{
	// 	console.log("object Detail is "+ obj.cellValue + obj.cellName+ obj.cellComment);
	// }
	render(){
		return(
			 
			<div>          
           <CellForm submitProjectDetail={this.submitProjectInfo}/>
           <ProjectDetail data ={this.state.data} />
           </div>
			)
	}
}





// ReactDOM.render(<MainApp  />,
//  document.getElementById('BindMainComponent'));