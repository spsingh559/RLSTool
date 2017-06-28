import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import ParentComponent from './Home/CellConstruct/ParentComponent.jsx';
import MainApp from './Home/CellConstruct/MainApp.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

ReactDOM.render(
	<MuiThemeProvider>
	<Router history ={hashHistory}>
	<Route path="/" component={ParentComponent}>
		<Route path="/dashboard" component={Dashboard} />
		<IndexRoute component={MainApp} />
	</Route>
	</Router>
	</MuiThemeProvider>,
 document.getElementById('BindMainComponent'));