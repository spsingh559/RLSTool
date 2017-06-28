import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
// const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
// import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import FontIcon from 'material-ui/FontIcon';
// import  {ApFooter, ApFooterStyle} from 'apeman-react-footer';
import Paper from 'material-ui/Paper';
import App from './App.jsx';
import ProjectDetail from './ProjectDetail.jsx';


export default class MainApp extends React.Component{

	state={
		projectID:'',
		projectName:'',
		data:[{'projectName':'RLS','projectID':1000}],
		openDrawer:false
	};

	handleClose = () => this.setState({openDrawer: false});

	handleToggle = () => this.setState({openDrawer: !this.state.openDrawer});

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
			 <MuiThemeProvider>
			 <div>
           <AppBar
             title="RLS Tool"
             iconClassNameRight="muidocs-icon-navigation-expand-more"
             onLeftIconButtonTouchTap={this.handleToggle}
           />
           <Drawer
          docked={false}
          width={200}
          open={this.state.openDrawer}
          onRequestChange={(openDrawer) => this.setState({openDrawer})}
        >
          <MenuItem onTouchTap={this.handleClose}>Home</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Dashboard</MenuItem>
        </Drawer>
           <App submitProjectDetail={this.submitProjectInfo}/>
           <ProjectDetail data ={this.state.data} />
           </div>

			 </MuiThemeProvider>
			)
	}
}



ReactDOM.render(<MainApp  />,
 document.getElementById('BindMainComponent'));