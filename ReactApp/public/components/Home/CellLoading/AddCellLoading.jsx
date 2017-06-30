import React from 'react';
import ReactDOM from 'react-dom';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import AppBar from 'material-ui/AppBar';
import _ from 'lodash';
import Divider from 'material-ui/Divider';
const style = {
  marginRight: 20,
  marginTop:30
};

const customContentStyle = {
  width: '80%',
  maxWidth: 'none',
};
export default class AddCellLoading extends React.Component{

	state={
		openDialogue:false,
		cellNames:'',
		cellValues:'',
		cellComments:'',
		cellID:0,
    startDate:null,
    endDate:null,
    totalMonth:0,
    listName:[],
    trackName:''
	}

	openDialogueBar=()=>{
		this.setState({openDialogue:true});
	}

handleCellNameChange=(e)=>{
  this.setState({cellNames:e.target.value});
}
	handleClose=()=>{
		this.setState({openDialogue:false});
	}

	handleTrackNameChange=(e)=>{
    var arr=[];
    this.setState({trackName:e.target.value});
    arr.push(trackName);
		this.setState({listName:arr});
    console.log(this.state.listName);
	}

	handlecellValueChange=(e)=>{
		this.setState({cellValues:e.target.value});
	}

	handleCellCommentChange=(e)=>{
		this.setState({cellComments:e.target.value});
	}

	// handleConstructSubmit=(e)=>{
	// 	 e.preventDefault();
 //     this.setState({cellID:this.state.cellID+1})
	// 	var obj={
	// 		cellID:this.state.cellID,
	// 		cellValue:this.state.cellValues,
	// 		cellName:this.state.cellNames,
	// 		cellComment:this.state.cellComments
	// 	};
	// 	console.log("object Detail in Add Construct"+ obj.cellValue+obj.cellName+obj.cellComment+obj.cellID);
	// 	this.props.handleConstructSubmitData(obj);
	// 	this.setState({cellValues:'',cellNames:'',cellComments:'',openDialogue:false});

	// }
  getTable=()=>{
    // alert(this.state.startDate);
     // console.log(this.state.endDate.getFullYear());
    var numberOfYear=this.state.endDate.getFullYear()-this.state.startDate.getFullYear();
    // console.log("total year is"+ numberOfYear);

    // console.log("current month is");
    var month=0;
    // console.log("month in current year is "+ month);
    if(numberOfYear==0){
      month=(this.state.endDate.getMonth()+1)-(this.state.startDate.getMonth()+1);
    }else{
      var currentMonth=this.state.startDate.getMonth()+1;
    // console.log(currentMonth);
    var month = 12- currentMonth;
    for (var i =1; i <=numberOfYear ; i++) {
      if(i==numberOfYear){
        month=month+this.state.endDate.getMonth()+1;
      }else{
        month=month+12;
      }
    }
      
    }




    this.setState({totalMonth:month});
    console.log("total month is"+ month);
  }

  handleStatrtDate=(e,date)=>{
    this.setState({startDate:date});
  }

  handleendDate=(e,date)=>{
    this.setState({endDate:date});
  };

	render(){

    // var tblData=for(var i=0; i<this.state.totalMonth;i++){
    //                        <TextField
    //                         hintText="Cell Construct Name"
    //                         floatingLabelText="Enter Cell Construct Name"
    //                         value={this.state.cellNames}
    //                         onChange={this.handleCellNameChange}
    //                     />
    //                     <br />
    //                      }
          let titleBar=<AppBar title="Add Cell Loader" />;        

		const actions = [
       <Divider style={{backgroundColor:'rgb(0, 188, 212)'}}/>,
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleConstructSubmit}
      />,
    ];



		return(
			<div>
			<FloatingActionButton style={style}
			onTouchTap={this.openDialogueBar}
			mini={true}>
     		 <ContentAdd />
   		 </FloatingActionButton>
        <Dialog
          title={titleBar}
          actions={actions}
          open={this.state.openDialogue}
          modal={true}
          onRequestClose={this.handleClose}
          contentStyle={customContentStyle}
          autoScrollBodyContent={true}
        >
          <TextField
                hintText="Cell Construct Name"
                floatingLabelText="Enter Cell Construct Name"
                value={this.state.cellNames}
                onChange={this.handleCellNameChange}
            />
            <br />
           <DatePicker hintText="Select Start Date" 
           onChange={this.handleStatrtDate}/>
             <br />
              <DatePicker hintText="Select End Date" onChange={this.handleendDate} /> 
              <FlatButton label="Genrate Table" primary={true} onTouchTap={this.getTable}/>
             <br />     

              {_.times(this.state.totalMonth, i =>
                <div key={i}>
                       <TextField key={i}
                            hintText="Cell Construct Name"
                            floatingLabelText="Enter Cell Construct Name"
                            value={this.state.trackName}
                            onChange={this.handleTrackNameChange}
                        />
                        <br />
                        </div>
                    )};
  {/*<div>
    {
      this.state.totalMonth.map(function(){
        return(
          <TextField
                              hintText="Cell Construct Name"
                              floatingLabelText="Enter Cell Construct Name"
                              value={this.state.cellNames}
                              onChange={this.handleCellNameChange}
                          />
                          
          );
      })
    }
    </div>*/}
            {/* { for(var i=0; i<this.state.totalMonth;i++){
                           <TextField
                            hintText="Cell Construct Name"
                            floatingLabelText="Enter Cell Construct Name"
                            value={this.state.cellNames}
                            onChange={this.handleCellNameChange}
                        />
                        <br />
                         }
                           <FlatButton label="submit" primary={true} />
                         }*/}
        </Dialog>
			</div>
			)
	}
} 