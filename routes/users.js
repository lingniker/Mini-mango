var express = require('express');
var router = express.Router();
var users = require('../db/users');
var questions = require('../db/questions');

/* GET users listing. */
router.get("/", function(req, res, next) {
  var str = req.query.user;
  console.log(str);
  console.log(req.query.info);
  if(req.query.user === req.session.name){
    if(req.query.info === "info"){
      users.findOne({"nick":str},function(err,top_data){   //查找一个
        res.render("info",{top_data:top_data,page:"my",info:"info",name:req.session.name});
      });
    }else  if(req.query.info === "focuslist"){
    users.findOne({"nick":str},function(err,top_data){   //查找一个
      res.render("info",{top_data:top_data,page:"my",info:"focuslist",name:req.session.name});
    });
  }else if(req.query.info === "puber"){
    users.findOne({"nick":str},function(err,top_data){
    questions.find({puber:[req.query.user]},function(err,qdata){
      console.log(qdata);
      res.render("info",{top_data:top_data,page:"my",info:"puber",qdata:qdata,name:req.session.name});
    });
  });
  }
  else if(req.query.info === "answer"){
    users.findOne({"nick":str},function(err,top_data){
    questions.where("ansuser").in([req.query.user]).exec(function(err,adata){
      console.log(adata,"aaaa");
    res.render("info",{top_data:top_data,page:"my",info:"puber",qdata:adata,name:req.session.name});
      });
    });
  }
}else{

  if(req.query.info === "info"){
    users.findOne({"nick":str},function(err,top_data){   //查找一个
      res.render("info",{top_data:top_data,page:"other",info:"info",name:req.session.name});
    });
  }else  if(req.query.info === "focuslist"){
  users.findOne({"nick":str},function(err,top_data){   //查找一个
    res.render("info",{top_data:top_data,page:"other",info:"focuslist",name:req.session.name});
  });
}else if(req.query.info === "puber"){
  users.findOne({"nick":str},function(err,top_data){
  questions.find({puber:[req.query.user]},function(err,qdata){
    console.log(qdata);
    res.render("info",{top_data:top_data,page:"other",info:"puber",qdata:qdata,name:req.session.name});
  });
});
}
else if(req.query.info === "answer"){
  users.findOne({"nick":str},function(err,top_data){
  questions.where("ansuser").in([req.query.user]).exec(function(err,adata){
  res.render("info",{top_data:top_data,page:"other",info:"puber",qdata:adata,name:req.session.name});
    });
  });
}
//   else if(req.query.info === "answer1"){
//   questions.where("answer1").in(req.query.user).exec(function(err,data){
//
//   });
// }
//   else if(req.query.info === "focusf"){
//   answers.where("answer").in(req.query.user).exec(function(err,data){
//     var arr = [];
//     for(var i=0;i<data.length;i++){
//       arr[i]._id = data[i].questionsid;
//     }
//     console.log(arr);
//    questions.find(arr,function(err,data){
//
//    });
//   });
//
// }

}
});




// router.get('/:name/:info',function(req,res,next){
//   console.log("-----------------");
//   console.log(req.params.name);
//   console.log("-----------------");
//   res.redirect("/");
//   if(req.body.info === focuslist){
//
//   users.find({nick:""},[focuslist],function(err,data){
//     res.render("info",{data:data,page:"my"});
//   });
// }else if(req.body.info === questions){
//   questions.find({puper:req.body.user},["title","_id"],function(err,data){
//     req.reder("info",{data:data,info:data});
//   });
// }else if(req.body.info === answers){
//   answers.find({puper:req.body.user},[questionsid],function(err,data){
//     questions.find({_id:questionsid},[],function(err,data){
//       res.render("info",{data:data,info});
//     });
//   });
// }elae if(req.body.info === focusf){
//   questions.find({nick:req.body.usert},[],function(err,data){
//     res.render("info",{data:data,info:info});
//   });
// }



// });




module.exports = router;
