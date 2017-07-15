var express = require('express');
var router = express.Router();
var users = require('../db/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  if(true){
  users.findOne({"nick":"yuanping"},["info"],function(err,data){   //查找一个
    console.log(data);

    res.render("info",{data:data,page:"my"});
   });
 }
});



router.get('/u',function(req,res,next){
  req.body;
  if(req.body.info === focuslist){

  users.find({nick:""},[focuslist],function(err,data){
    res.render("info",{data:data,page:"my"});
  });
}else if(req.body.info === questions){
  questions.find({puper:req.body.user},["title","_id"],function(err,data){
    req.reder("info",{data:data,info:data});
  });
}else if(req.body.info ==== answers){
  answers.find({puper:req.body.user},[questionsid],function(err,data){
    questions.find({_id:questionsid},[],function(err,data){
      res.render("info",{data:data,info});
    });
  });
}elae if(req.body.info === focusf){
  questions.find({nick:req.body.usert},[],function(err,data){
    res.render("info",{data:data,info:info});
  });
}



});




module.exports = router;
