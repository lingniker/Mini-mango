var express = require("express");
var router = express.Router();
var users = require("../db/users");
var bcrypt = require("bcrypt");
var salt = 10;

router.post("/", function(req, res, next) {

     var data = req.body;
     console.log(data);
     console.log(data.new_passwd);

    // var m = new users();

    users.find({
      nick: data.nick, phone: data.phone
    }, function(err, doc){
      if (err) {
        console.log(err);
      } else if (doc.length !== 0){

        bcrypt.hash(data.new_passwd, salt, function(err, hash){
          console.log(hash);
            if (err){
              console.log(err);
            } else {
              users.update({nick: data.nick},{$set:{password: hash}},function(err){

              });
              return res.redirect("/login");
            }
        });

      } else {
      return res.redirect("/login/errs")
      }

    });

  });

module.exports = router;
