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
