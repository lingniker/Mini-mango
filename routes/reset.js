var express = require("express");
var router = express.Router();
var users = require("../db/users");
var bcrypt = require("bcrypt");
var salt = 10;

router.post("/", function(req, res, next) {

     var data = req.body;
     console.log(data);

    // var m = new users();


    users.find({

    }, function(err, doc){

      console.log(doc);

      var w = 0, q = 0;

      for (var i = 0, len = doc.length; i < len; i++) {

         var nicc = doc[i].nick;
        //  console.log(nicc);

         if ( data.nick === nicc) {

            w++;

         }
      }


      for (var j = 0, len = doc.length; j < len; j++) {

          var phoo = doc[j].phone;
          // console.log(phoo);
          // console.log(data.phone);

         if (data.phone == phoo) {

            console.log("----------");
            q++;
         }

      }
      console.log("w = ", w);
      console.log("q = ", q);

      if (err) {
        console.log(err);
      } else if ((w === 1) && (q === 1)) {

         bcrypt.hash(data.new_passwd, salt, function(err, hash){
           console.log(hash);

           users.update({nick: data.nick},{$set:{password: hash}},function(err){
             
           });

           return res.redirect("/login");

         });


      } else if ((w === 0) || (q === 0)){

         console.log("账号或手机号不存在!");

        //  return false;

      }

    });


  });

module.exports = router;
