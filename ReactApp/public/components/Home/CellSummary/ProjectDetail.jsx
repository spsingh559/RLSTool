import React from 'react';
import ReactDOM from 'react-dom';
import EachProjectDetail from './EachProjectDetail.jsx';

export default class ProjectDetail extends React.Component {


	saveEditProjectDetail=(pName,id)=>{
		this.props.saveEditProjectDetail(pName,id);
	};

	removeProjectDetail=(id)=>{
		this.props.removeProjectDetail(id);
	}

	render(){
		console.log(this.props.data);	
		if(this.props.data.Length!=0){
		var projectData = this.props.data.map(function(data) {
	      return (      	
	      	<div key={data.projectID}>
	        <EachProjectDetail 
	        projectName={data.projectName}
	        projectID={data.projectID}
	        id={data.id}
	        saveEditProjectDetail={this.saveEditProjectDetail}
	        removeProjectDetail={this.removeProjectDetail}
	        />  
	         </div>      
	        
	      );
	    }.bind(this));
	}
		return(
			<div>			      	
				{projectData}				
			</div>
			);
	}
}