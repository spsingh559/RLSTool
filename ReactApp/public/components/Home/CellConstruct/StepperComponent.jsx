import React from 'react';
import ReactDOM from 'react-dom';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import AddConstructCell from './AddConstructCell.jsx';
import AddConstructTable from './AddConstructTable.jsx';

export default class StepperComponent extends React.Component{

	state = {
    finished: false,
    stepIndex: 0,
    cellData:[{'cellID':0,'cellName':'Credit Suisse','cellValue':1234,'cellComment':'New Track'}]
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  submitCellDetailInfo=(obj)=>{
    console.log("data in Stepper"+ obj.cellName+ obj.cellValue+obj.cellComment);
    var dataCurrentState=this.state.cellData;
  //  var newPostData=[obj].concat(dataCurrentState);
    var newPostData=dataCurrentState.concat([obj]);
    this.setState({cellData:newPostData});
  }

  editTblRow=(obj,cellID)=>{
    //console.log("obj in Stepper" + "id is"+obj.cellID);
    var currentData=this.state.cellData;
    var index;
    for (var i = 0; i < currentData.length; i++) {
      if(currentData[i].cellID==cellID){
       // index=obj.cellID;
       var editData=currentData.splice(i,1,obj);
       editData=null;
        break;
      }
    };

    console.log("current data is");
    console.log(currentData);

    this.setState({cellData:currentData});
  }

  removetTblRow=(cellID)=>{
    var currentData=this.state.cellData;
     for (var i = 0; i < currentData.length; i++) {
      if(currentData[i].cellID==cellID){
       // index=obj.cellID;
       var editData=currentData.splice(i,1);
       editData=null;
        break;
      }
    };
    this.setState({cellData:currentData});
  }

  renderStepActions(step) {
    const {stepIndex} = this.state;

    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label={stepIndex === 2 ? 'Finish' : 'Next'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onTouchTap={this.handleNext}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onTouchTap={this.handlePrev}
          />
        )}
      </div>
    );
  }

	render(){

    const {finished, stepIndex} = this.state;

		return(

      <div style={{maxWidth: 'auto', maxHeight: 'auto', margin: 'auto'}}>
        <Stepper activeStep={stepIndex} orientation="vertical">
          <Step>
            <StepLabel>Add Cell Construct Detail</StepLabel>
            <StepContent>
            <AddConstructCell handleConstructSubmitData={this.submitCellDetailInfo}/>
            <AddConstructTable cellData={this.state.cellData} 
            editDetailTblRow ={this.editTblRow}
            removeDetailTblRow={this.removetTblRow}
            />
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Create an ad group</StepLabel>
            <StepContent>
              <p>An ad group contains one or more ads which target a shared set of keywords.</p>
              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Create an ad</StepLabel>
            <StepContent>
              <p>
                Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.
              </p>
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
        </Stepper>
        {finished && (
          <p style={{margin: '20px 0', textAlign: 'center'}}>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                this.setState({stepIndex: 0, finished: false});
              }}
            >
              Click here
            </a> to reset the example.
          </p>
        )}
      </div>
				 
			);
	}
}