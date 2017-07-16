var express = require('express');
var router = express.Router();
var answers = require("../db/answers");
var questions = require("../db/questions");
var tags = require("../db/tags");
var users = require("../db/users");
/* GET answers page. */

router.get(/^\/[a-zA-Z|0-9]{10,24}?$/, function(req, res, next) {
  var str = req.url.substr(1,24);
  console.log(str);
  //str是问题的id
  questions.findOne({_id:str},function(err,data){
  //通过问题的id找到集合
    var username = req.session.name;
    answers.find({issuesid:data._id},function(err,result){
      res.render("answers",{username:username,info:data,info2:result});
    })

  })
});
router.post("/",function(req,res,next){
  console.log("*********",req.body);
  var m = new answers;
  m.content = req.body.content;
  m.ansuser = [req.session.id,req.body.user];
  m.issuesid = req.body.issuesid;
  m.ctime = req.body.ctime;
  m.save(function(err,data){
    console.log(data);
    res.json(data);
  });
});

module.exports = router;
