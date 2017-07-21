import React from 'react';
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
// import AddCellContent from './AddCellContent.jsx';


const style = {
  marginRight: 20,
  marginTop:30
};

const customContentStyle = {
  width: '80%',
  maxWidth: 'none',
};

export default class AddCellConstruct extends React.Component{

  state={
    openDialogue:false,
    // tracklist:['as_M','as_C','Set_S','id_S','id_M','id_C','ia_S','ia_M','ia_C','as_M_Lon'],
    practiseName:'',
    roleName:'',
    locationName:'',
    bandName:'',
    txtValue:'',
    names:'',
    localTrackList:[],
    obj:{practiseName:"",roleName:"",locationName:"",bandName:""}
    // obj:{practise:"",role:"",location:"",band:"",as_M:"",as_C:"",Set_S:"",id_S:"",id_M:"",id_C:"",ia_S:"",ia_M:"",ia_C:"",as_M_Lon:""},
    // text:[{practise:"Sr Dev",role:"Developer",location:"India",band:"B3",as_M:1,as_C:1,Set_S:1,id_S:1,id_M:1,id_C:1,ia_S:1,ia_M:1,ia_C:1,as_M_Lon:1}]
  }

	openDialogueBar=()=>{
		this.setState({openDialogue:true});
    $.ajax({
      url:'http://localhost:3000/api/v1/trackSetting',
      type:'GET',
      contetntType:'application/json',
      success: function(data){
         console.log('server connected from Add Track for get');
         console.log(data);
        //  var currentState=this.state.localTrackList;
        //  var newData=[currentState].concat(data.message)
        //  var newData=[data.message].concat(currentState);
           this.setState({localTrackList:data.message});
                // this.state.localTrackList.concat[data.message];
          console.log("localTrackList");
          console.log(this.state.localTrackList);
        }.bind(this),
      error:function(err){
        console.log('server not connected from Add track');
      }.bind(this)
    });
  	}

	handleClose=()=>{
		this.setState({openDialogue:false});
	}

  handlePractiseNameChange=(e)=>{
    this.setState({practiseName:e.target.value});
  }
  handleRoleNameChange=(e)=>{
    this.setState({roleName:e.target.value});
  }

  handleLocationNameChange=(e)=>{
    this.setState({locationName:e.target.value});
  }

  handleBandNameChange=(e)=>{
    this.setState({bandName:e.target.value});
  }

  handleTrackNameChange=(e)=>{
  this.setState({names:e.target.name});
    this.setState({txtValue:e.target.value});
  }

  componetWillMount=()=>{
    console.log('cwm in CellConstruct');

  }
  handleAfterChange=()=>{
    console.log('txtbox name is'+this.state.names);
    console.log('txtbox value is'+ this.state.txtValue);
    this.state.obj[this.state.names]=this.state.txtValue;
  //   // let index=0;
  //   // for(let i=0; i<this.state.localTrackList.length;i++){
  //   //   if(this.state.tracklist[i].trackName==this.state.names){
  //   //     index=i;
  //   //     break;
  //   //   }
  //   // }
  //   // let keyVar=this.state.tracklist[index];
  //   // let currentState=this.state.text;
  //   // let val=this.state.textF;
  //   // this.state.obj[keyVar]=val;
  //   //  console.log(this.state.obj);
  }

  onAddingTitle=()=>{
    console.log('obj is');
// console.log(this.state.obj);
// var tmpObj={
//   practiseName:this.state.practiseName,
//   roleName:this.state.roleName,
//   locationName:this.state.locationName,
//   bandName:this.state.bandName
// }
      this.state.obj.practiseName=this.state.practiseName;
      this.state.obj.roleName=this.state.roleName;
      this.state.obj.locationName=this.state.locationName;
      this.state.obj.bandName=this.state.bandName;
      this.state.obj._id=Date.now();
      console.log('object send from AddCellConstruct');
      console.log(this.state.obj);
      let newObj=this.state.obj;
      this.props.CellConstructObj(newObj);
      newObj=null;
      this.setState({openDialogue:false});
      this.setState({practiseName:'',roleName:'',locationName:'',bandName:''});
//     var dataCurrentState=this.state.text;
//     this.state.text.push(this.state.obj);
// console.log(this.state.text);

    //   console.log(this.state.obj);

  }

	render(){

		 let titleBar=<AppBar title="Add Cell Construct" />;

		const actions = [
       <Divider style={{backgroundColor:'rgb(0, 188, 212)'}}/>,
      <FlatButton
        key="one"
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        key="tw0"
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.onAddingTitle}
      />,
    ];

    let trackArr=[];
    for(let i=0; i<this.state.localTrackList.length;i++){
    trackArr.push(
      <div><TextField key={i}
            name={this.state.localTrackList[i].trackName}
            hintText="Practise Name"
            floatingLabelText={this.state.localTrackList[i].trackName}
            onChange={this.handleTrackNameChange}
            onBlur={this.handleAfterChange}
        />
        <br />
      </div>
      );
    }

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
                hintText="Practise Name"
                floatingLabelText="Enter Practise Name"
                value={this.state.practiseName}
                onChange={this.handlePractiseNameChange}
            />
            <br />
            <TextField
                  hintText="Role Name"
                  floatingLabelText="Enter Role Name"
                  value={this.state.roleName}
                  onChange={this.handleRoleNameChange}
              />
              <br />
              <TextField
                    hintText="Location Name"
                    floatingLabelText="Enter Location Name"
                    value={this.state.locationName}
                    onChange={this.handleLocationNameChange}
                />
                <br />
                <TextField
                      hintText="Band Name"
                      floatingLabelText="Enter Band Name"
                      value={this.state.bandName}
                      onChange={this.handleBandNameChange}
                  />
                  <br />
                  {trackArr}
        </Dialog>
        </div>

			);
	}
}
