var express = require('express');
var bcrypt = require("bcrypt");
var router = express.Router();
var users = require('../db/users');



/* GET denglu page. */
router.get('/', function(req, res, next) {

    res.render("login",{nick:"", passwd:""});

  // users.findOne({
  //
  // })

});
// router.post('/',)

router.post("/", function(req, res, next) {

    var data = req.body;
    console.log(data);

    users.find({
      nick: data.nick,
    }, function(err, doc){

      console.log(doc);

      if (err) {
        console.log(err);
      } else if (doc.length !== 0){

         console.log(data.passwd);
         console.log(doc[0].password);

         bcrypt.compare(data.passwd, doc[0].password, function(err, hash){
           console.log(hash);

            if (hash) {
              req.session.name = data.nick;
               return res.redirect("/");
            } else {
              return res.render("login",{nick:"", passwd: "密码输入不正确!"});
            }

         })

      } else {

         return res.render("login",{nick:"该昵称不存在", passwd: ""});

      }

    });

})





module.exports = router;
