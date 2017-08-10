var express = require("express");
var router = express.Router();
var users = require("../db/users");
var ques = require("../db/questions");

router.get("/",function(req,res){
    res.json("hahahah")
})

router.route("/login")
.post(function(req,res){
  var uname,passwd,uname1;
  uname = req.body.username;
  passwd = req.body.passwd;
  
  users.findOne({$or:[{nick:req.body.username},{phone:req.body.username}]},function(err,data){
    if(err){
      console.log(err);
    }else if(data && data.password == passwd){
      req.session.name = uname;
      res.json({result:"ok",name:req.session.name})
    }else {
      res.json("密码错误，登录失败!")
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
          var m = new users;
          m.nick = uname;
          m.password = passwd;
          m.phone = phone;
          m.save(function(err,data){
            res.json("ok")
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


router.route("/ques")
.get(function(req,res){
  ques.find({},function(err,data){
    var name = req.session.name;
    res.json({datas:data,name:name})
  })
})


router.route("/tiwen")
.post(function(req,res){
    var m = new ques;
    m.title = req.body.question;
    m.content = req.body.miaoshu;
    m.save(function(err,data){
      res.json("ok")
    })
})

router.route("/zaixian")
.get(function(req,res){
  var name = req.session.name;
  res.json(name)
})
module.exports = router;
