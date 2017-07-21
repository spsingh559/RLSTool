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

// const var monthName=['Jan', 'Feb','March','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'];
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
    trackName:'',
    monthName:['Jan', 'Feb','March','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'],
    totalMonthList:[],
    txtValue:'',
    name:'',
    obj:{}
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

    this.setState({txtValue:e.target.value,name:e.target.name});
  //   var arr=[];
  // this.setStathandleTrackNameChangee({trackName:e.target.value})
  // //   for(var i=0; i<this.state.totalMonth;i++){
  // //     this.setState({trackName:e.target.value+i});
  //    this.state.text.push(this.state.trackName);
  //   }
  //   // this.setState({trackName:e.target.value});
  //   // arr.push(trackName);
		// this.setState({listName:arr});
    //  console.log(this.state.text);
	}

	handlecellValueChange=(e)=>{
		this.setState({cellValues:e.target.value});
	}

	handleCellCommentChange=(e)=>{
		this.setState({cellComments:e.target.value});
	}

  handleBlur=()=>{
    console.log('name is '+this.state.name +'and value is'+ this.state.txtValue);
    this.state.obj[this.state.name]=this.state.txtValue;
  }


  getTable=()=>{
    // alert(this.state.startDate);
     // console.log(this.state.endDate.getFullYear());
       var currentMonth=this.state.startDate.getMonth()+1;
       let lastMonth=this.state.endDate.getMonth()+1;
       let currentYear=this.state.startDate.getFullYear();
       let lastYear=this.state.endDate.getFullYear();
    var numberOfYear=lastYear-currentYear;
    // console.log("total year is"+ numberOfYear);

    // console.log("current month is");
    var month=0;
    // console.log("month in current year is "+ month);
    if(numberOfYear==0){
      month=(this.state.endDate.getMonth()+1)-(this.state.startDate.getMonth()+1)+1;
    }else{

    // console.log(currentMonth);
    var month = 12- currentMonth+1;
    for (var i =1; i <=numberOfYear ; i++) {
      if(i==numberOfYear){
        month=month+lastMonth;
      }else{
        month=month+12;
      }
    }
}
let tmpArr=[];
let lstTmpArr=[];

  let counter=currentMonth;
  for(let i=0; i<month;i++){
    if(counter>12){
      console.log('inside if loop');
      console.log('counter is'+ counter);
      counter=counter%12;
      currentYear++;
    }
    tmpArr.push(this.state.monthName[counter-1]+currentYear);
    counter++;
  }
  console.log('array is');
  console.log(tmpArr);
    this.setState({totalMonth:month,totalMonthList:tmpArr});
    console.log("total month is"+ this.state.totalMonth);
    console.log('total month list is'+ this.state.totalMonthList);

  }

  handleStatrtDate=(e,date)=>{
    this.setState({startDate:date});
  }

  handleendDate=(e,date)=>{
    this.setState({endDate:date});
  }

  onAddingTitle=(key)=> {
      event.preventDefault();
      console.log('object is');
      console.log(this.state.obj);
    ///  console.log(key.value);
    // let formElements = event.target.value;
    // console.log(event.target.elements);
    // let formData = {
    //   subJudul: []
    // };
    // Object.keys(formElements).forEach((key) => {
    //   if (key.search('textbox') != -1) {
    //     formData.subJudul.push(formElements[key].value)
    //   }
    // });
    // console.log('formData', formData);
   }

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
        onTouchTap={this.onAddingTitle}
      />,
    ];

// let subJudulInput = []; // this variable will render
//   for (var i = 0; i < this.state.totalMonth; i++) {
//      let index = i + 1;
//      subJudulInput.push(
//         <div key={'formgroup' + index} class="form-group">
//            {(i === 0) ? <label for="subJudulInput">Sub Judul</label>:false}
//            <input key={'input' + index} type="text" name={"textbox-"+index} class="form-control" placeholder={`Masukan Sub Judul ${index}`}/>
//         </div>
//      );
//   }

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
                       <TextField id={i}
                            hintText="Cell Construct Name"
                            name={this.state.totalMonthList[i]}
                            floatingLabelText={this.state.totalMonthList[i]}
                            // value={this.state.text}
                            onBlur={this.handleBlur}
                            onChange={this.handleTrackNameChange}
                        />
                        <br />
                        </div>
                    )}

        </Dialog>
			</div>
			)
	}
}
