var express = require('express');
var router = express.Router();
var users = require('../db/users');
var bcrypt = require("bcrypt");
var salt = 10;


/* GET zhuce page. */
router.post('/', function(req, res, next) {
    // res.send("zhuce is ok!");


    var data = req.body;
    // console.log(data);

    var m = new users();

    m.nick = data.nick;
    m.phone =  data.phone;
    // m.password =  data.passwd;

    users.find({

    }, function(err, doc){
      // console.log(doc);


      var w = 0, q = 0;

      for (var i = 0, len = doc.length; i < len; i++) {

        var nicc = doc[i].nick;

        if (data.nick === nicc) {

            w++;

        }

      }

      for (var j = 0, len = doc.length; j < len; j++) {

        var phoo = doc[j].phone;
        // console.log(data.phone);
        // console.log(phoo);

        if (data.phone == phoo) {

            q++;

        }

      }

      console.log("w =", w );
      console.log("q =", q );

      if (err) {

         console.log(err);

      } else if ((w === 1) || (q === 1)){

         console.log("账号或手机号码重复!");


      } else if ((w === 0) && (q === 0)){

         bcrypt.hash(req.body.passwd, salt, (err, hash) => {

           m.password = hash;

           m.save(function(err){

             if (err) {

               console.log(err);

             } else {

               return res.redirect("/login");

             }

           });

         })

      }


    });

});

module.exports = router;
