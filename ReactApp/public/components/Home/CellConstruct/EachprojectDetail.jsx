import React from 'react';
import ReactDOM from 'react-dom';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Grid,Row } from 'react-bootstrap';
import StepperComponent from './StepperComponent.jsx';
export default class EachProjectDetail extends React.Component {

	render(){

		return(
			<div style={{marginTop:'20px'}}>
			{/*<List>
        <ListItem
          leftAvatar={<Avatar src="images/projectIcon.png" />}
          primaryText={this.props.projectName}
          secondaryText= { this.props.projectID}
        />
        <Divider inset={true} />
        </List>*/}
        <Grid>
  <Row>
        <Card>
    <CardHeader
      title={this.props.projectName}
      subtitle={ this.props.projectID}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardActions>
      <FlatButton label="Edit" />
      <FlatButton label="Remove" />
    </CardActions>
    <CardText expandable={true}>    
     <StepperComponent />
    </CardText>
  </Card>
  </Row>
  </Grid>
  
			</div>
			)
	}
}