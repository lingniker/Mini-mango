var express = require("express");
var users = require('../db/users');
var questions = require('../db/questions');
var answers = require('../db/answers');
var tags = require('../db/tags');
var bcrypt = require("bcrypt");
var salt = 10;

var router = express.Router();

router.route("/registry")
.post((req,res)=>{
  console.log(req.body);
  res.json(req.body);
})


// 获取用户信息列表
router.route("/userslist")
.get(  (req,res) => {
  users.find({},(err,data) => {
    if(err){
      console.log(err);
    }else{
      res.json({datas:data})
    }
  })
});
// 登录验证
router.route("/login")
.post((req,res) => {
  console.log("来了");
  var data = req.body;
  console.log(data);

  users.find({
    nick: data.nick,
  }, function(err, doc){

    console.log(doc);

    if (err) {
      console.log(err);
    } else if (doc.length !== 0){

       console.log("===",data.passwd);
       console.log(doc[0].password);

       bcrypt.compare(data.passwd, doc[0].password, function(err, hash){
         console.log(hash);
          if (hash) {
            req.session.name = data.nick;
             return res.json({data1:true,nick: "",pw:"" });
          } else {
            return res.json({data1:false,nick:"",pw: "密码输入不正确!"});
          }
       })
    } else {

       return res.json({data1:false,nick:"该昵称不存在",pw:""});

    }

  });
});
// 注册用户信息
router.route("/register")
.post((req,res) => {
  var data = req.body;
  console.log(data);

  var m = new users();
  m.nick = data.nick;
  m.password = data.passwd;
  m.phone = data.phone;
  m.ctime = new Date().getTime();


  users.find({$or:[{
    nick: data.nick
  }, { phone: data.phone}]

}, function(err, doc){

   if (err) {
     console.log(err);
   } else if (doc.length !== 0) {
     return res.json({data1:false,hint:"昵称或手机号已被注册！"});
   } else {
     bcrypt.hash(data.passwd, salt, function(err, hash){
        m.password = hash;
        m.save(function(err){
          if (err) {
            console.log(err);
          } else {
            return res.json({data1:true,hint:""});
          }
        });
     });
   }

});

});

// 问题列表
router.route("/questionslist")
.get((req,res) => {
  questions.find({},(err,data) => {
    if(err){
      console.log(err);
    }else{
      res.json({datas:data})
    }
  })
})

// 回答列表
router.route("/answerslist")
.get((req,res) => {
  answers.find({},(err,data) => {
    if(err){
      console.log(err);
    }else{
      res.json({datas:data})
    }
  })
})

// 标签列表
router.route("/tagslist")
.get((req,res) => {
  tags.find({},(err,data) => {
    if(err){
      console.log(err);
    }else{
      res.json({datas:data})
    }
  })
})
module.exports = router;
