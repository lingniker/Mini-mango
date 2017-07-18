var express = require('express');
var router = express.Router();
var answers = require("../db/answers");
var questions = require("../db/questions");
var tags = require("../db/tags");
var users = require("../db/users");
/* GET answers page. */


router.get(/^\/[a-zA-Z|0-9]{10,24}?$/, function(req, res, next) {

  var str = req.url.substr(1,24);

  questions.findByIdAndUpdate(str,{$inc:{scans:1}},function (err,data) {

  });

  console.log(str);
  //str是问题的id
  questions.findOne({_id:str},function(err,data){
  //通过问题的id找到集合
    var username = req.session.name;
    answers.find({issuesid:data._id},function(err,result){
      users.findOne({
        nick:req.session.name // ======== ? 登录状态下的用户名
      },function(err,top_data){
        // console.log(data);
        if(typeof(req.session.name) == 'undefined'){
          req.session.name = null;
        }
      res.render("answers",{username:username,info:data,info2:result,top_data:top_data,name:req.session.name,huidas:result.length});
      });
    });
  });
});
router.post("/",function(req,res,next){
  var m = new answers;
  m.content = req.body.content;
  m.ansuser = [req.session.id,req.body.user];
  m.issuesid = req.body.issuesid;
  m.ctime = req.body.ctime;
  m.save(function(err,data){
    console.log(data);
    if(req.body.guanzhu == 1){
      questions.findByIdAndUpdate(req.body.issuesid,{$inc:{"focus":1}},function(err,data1){});
      questions.findByIdAndUpdate(req.body.issuesid,{$push:{"ansuser":req.session.name}},function(err,data1){});
    }else if(req.body.guanzhu == -1){
      questions.findByIdAndUpdate(req.body.issuesid,{$inc:{"focus":-1}},function(err,data1){});
      questions.findByIdAndUpdate(req.body.issuesid,{$pull:{"ansuser":req.session.name}},function(err,data1){});
    }
    if( req.body.shoucang == 1){
      questions.findByIdAndUpdate(req.body.issuesid,{$inc:{"collects":1}},function(err,data1){});
      questions.findByIdAndUpdate(req.body.issuesid,{$push:{"ansuser1":req.session.name}},function(err,data1){});
    }else if(req.body.shoucang == -1){
      questions.findByIdAndUpdate(req.body.issuesid,{$inc:{"collects":-1}},function(err,data1){});
      questions.findByIdAndUpdate(req.body.issuesid,{$pull:{"ansuser1":req.session.name}},function(err,data1){});
    }
    var answers = parseInt(req.body.huidas) + 1;
    questions.findByIdAndUpdate(req.body.issuesid,{$set:{"answers":answers}},function(err,data1){});
    res.json(data);
  });
});


module.exports = router;
