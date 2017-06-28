import React from 'react';
import ReactDOM from 'react-dom';
import EachProjectDetail from './EachProjectDetail.jsx';

export default class ProjectDetail extends React.Component {

	render(){
		console.log(this.props.data);	
		if(this.props.data.Length!=0){
		var projectData = this.props.data.map(function(data) {
	      return (      	
	      	<div key={data.projectID}>
	        <EachProjectDetail 
	        projectName={data.projectName}
	        projectID={data.projectID}
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