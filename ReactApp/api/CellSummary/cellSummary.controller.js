var controller = {};
 var CellSummary=require('./cellSummaryModel.js');
//
controller.createCellSummary	  = function(req, res) {

  console.log('Project Detail api connected for post');

   CellSummary.create(req.body,function(err,data){
          if(err) { console.log('server error in post'+err); }
          else{
           res.json({message:data});
          }
        });
  };
//
controller.getCellSummary=function(req,res){

  console.log('CellSummary api connected for get');

   CellSummary.find({}).exec(function(err,data){
          if(err) { console.log('server error in get'+err); }
          else{
           res.json({message:data});
          }
        });
};

controller.updateCellSummary=function(req,res){
    console.log('CellSummary api connected for update');
    console.log(req.body);
    var data=req.body._id;
    console.log(data);
    CellSummary.update({_id:req.body._id},req.body,function(err,data){
      if(err){console.log('server error in update of CellSummary'+ err);}
      else{
        res.json({message:data});
      }
    })
};

controller.removeCellSummary = function(req,res){
     console.log('CellSummary api connected for delete');
   console.log(req.param("_id"));
  // res.send(msg:'success');
  CellSummary.remove({_id:req.param("_id")},
  function(err, data){
            if(err)
            console.log('server error in remove'+ err);
            else
              res.json({message:data});
  });
}


exports = module.exports = controller;
