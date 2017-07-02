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
		id:0,
		data:[]
	};

	
	submitProjectInfo=(obj)=>{
		console.log("project  ID is"+ obj.projectID);
		// this.setState({this.state.projectID:obj.projectID, this.state.projectName:obj.projectName});
		console.log("project Name is"+ obj.projectName);
		this.setState({id:this.state.id+1});
		var projObj={
			id:this.state.ID,
			projectID:obj.projectID,
			projectName:obj.projectName
		};
		var dataCurrentState=this.state.data;
		var newPostData=[projObj].concat(dataCurrentState);
		this.setState({data:newPostData});
	}

	saveEditProjectDetail=(obj,id)=>{
			var dataCurrentState=this.state.data;
			var index;
    for (var i = 0; i < dataCurrentState.length; i++) {
      if(dataCurrentState[i].id==id){
       // index=obj.cellID;
       var editData=dataCurrentState.splice(i,1,obj);
       editData=null;
        break;
      }
    };

    

    this.setState({data:dataCurrentState});
	}

	removeProjectDetail=(id)=>{
		var dataCurrentState=this.state.data;
			var index;
    for (var i = 0; i < dataCurrentState.length; i++) {
      if(dataCurrentState[i].id==id){
       // index=obj.cellID;
       var editData=dataCurrentState.splice(i,1);
       editData=null;
        break;
      }
    };

    

    this.setState({data:dataCurrentState});
	}
	
	render(){
		return(
			 
			<div>          
           <CellForm submitProjectDetail={this.submitProjectInfo}/>
           <ProjectDetail data ={this.state.data} 
           saveEditProjectDetail={this.saveEditProjectDetail}
           removeProjectDetail={this.removeProjectDetail}
           />
           </div>
			)
	}
}





// ReactDOM.render(<MainApp  />,
//  document.getElementById('BindMainComponent'));