var express = require('express');
var router = express.Router();
var users = require('../db/users');
var bcrypt = require("bcrypt");
var salt = 10;


/* GET zhuce page. */
router.post('/', function(req, res, next) {
    // res.send("zhuce is ok!");


    var data = req.body;
    console.log(data);

    var m = new users();
    m.nick = data.nick;
    m.password = data.passwd;
    m.phone = data.phone;

    users.find({$or:[{
      nick: data.nick
    }, { phone: data.phone}]

  }, function(err, doc){

     if (err) {
       console.log(err);
     } else if (doc.length !== 0) {
       console.log("账户与手机号匹配不正确!");
       return res.redirect("/login/errs2");
     } else {
       bcrypt.hash(data.passwd, salt, function(err, hash){
          m.password = hash;

          m.save(function(err){
            if (err) {
              console.log(err);
            } else {
              return res.redirect("/login");
            }
          });
       });
     }

  });

});

module.exports = router;
