var express = require("express");
var router = express.Router();
var users = require("../db/users");
var ques = require("../db/questions");
var answer = require("../db/answers");
var bcrypt = require("bcrypt");
var salt = 10;

router.get("/",function(req,res){
    res.json("hahahah")
})

router.route("/login")
.post(function(req,res){
  var uname,passwd;
  uname = req.body.username;
  passwd = req.body.passwd;
  users.findOne({$or:[{nick:req.body.username},{phone:req.body.username}]},(err,data) => {
    if(err){
      console.log(err);
    }else if(data){
      bcrypt.compare(passwd, data.password, function(err, hash){
        if(hash){
          req.session.name = uname;
          res.json({result:"ok",name:req.session.name})
        }else {
          res.json({result:"密码错误，请重新输入"})
        }
      })
    }else {
      res.json({result:"账号不存在，登录失败!"})
    }
  })
})

router.route("/zhuce")
.post(function(req,res){
  var uname,passwd,repasswd,phone;
  uname = req.body.username;
  passwd = req.body.passwd;
  repasswd = req.body.repasswd;
  phone = req.body.phone;
  if(phone.length < 11){
    res.json("手机号码不正确，请重新输入")

  }else {

    if(passwd == repasswd){
      users.find({nick:uname},(err,data) => {
        if(data.length == 0){
          bcrypt.hash(passwd, salt, function(err, hash){
            var m = new users;
            m.nick = uname;
            m.password = hash;
            m.phone = phone;
            m.save(function(err,data){
              res.json("ok")
            })
          })
        }else {
          res.json("用户已存在，请重新注册");
        }
      })
    }else {
      res.json("密码不一致，请重新输入")
    }

  }
})

router.route("/ques1")
.get(function(req,res){
  ques.find({},function(err,data){
    var name = req.session.name;
    // users.findOne({$or:[{nick:name},{phone:name}]},(err,result) => {
      res.json({datas:data})
    // })
  })
})

router.route("/ques")
.get(function(req,res){
  ques.find({},function(err,data){
    var name = req.session.name;
    // users.findOne({$or:[{nick:name},{phone:name}]},(err,result) => {
      res.json({datas:data})
    // })
  })
})


router.route("/tiwen")
.post(function(req,res){
    var m = new ques;
    m.title = req.body.question;
    m.content = req.body.miaoshu;
    m.puber = [req.session.name];
    m.ltime = parseInt(new Date().getTime());
    m.save(function(err,data){
      res.json("ok")
    })
})

router.route("/zaixian")
.get(function(req,res){
  var name = req.session.name;
    users.findOne({$or:[{nick:name},{phone:name}]},(err,data) => {
      res.json({name:data.nick,phone:data.phone})
    })
})

router.route("/answer")
.post(function(req,res){
  var m = new answer;
  m.content = req.body.answer;
  m.issuesid = req.body.ids;
  m.save(function(err,data){
    res.json("ok")
  })
})

router.route("/answer1")
.post(function(req,res){
  console.log("++++++++++++++++++",req.body);
  answer.find({issuesid:req.body.ids},(err,data)=>{
    res.json(data)
  })
})
module.exports = router;
