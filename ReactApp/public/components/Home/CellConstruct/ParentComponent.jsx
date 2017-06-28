import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav.jsx';


export default class ParentComponent extends React.Component{

	render(){
		return(
			<div>
			<Nav />
			{this.props.children}
			</div>
			);
	}
}