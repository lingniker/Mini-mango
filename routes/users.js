var express = require('express');
var router = express.Router();
var users = require('../db/users');
var questions = require('../db/questions');

/* GET users listing. */
router.get("/", function(req, res, next) {
  var str = req.query.user;
  console.log(str);
  console.log(req.query.info);
  if(true){
    if(req.query.info === "info"){
      users.findOne({"nick":str},["info","nick","focuselist"],function(err,mydata){   //查找一个
        res.render("info",{mydata:mydata,page:"my",info:"info"});
      });
    }else  if(req.query.info === "focuslist"){
    users.findOne({"nick":str},["info","nick","focuslist"],function(err,mydata){   //查找一个
      res.render("info",{mydata:mydata,page:"my",info:"focuslist"});
    });
  }else if(req.query.info === "puber"){
    users.findOne({"nick":str},["info","nick","focuslist"],function(err,mydata){
    questions.find({puber:[req.query.user]},function(err,qdata){
      res.render("info",{mydata:mydata,page:"my",info:"puber"});
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
