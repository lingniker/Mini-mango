var express = require('express');
var router = express.Router();
var questions = require("../db/questions");
var users = require("../db/users");

/* GET questions page. */
router.get('/', function(req, res, next) {
  users.findOne({
    nick:req.session.name // ======== ? 登录状态下的用户名
  },function(err,top_data){
    // console.log(data);
    if(typeof(req.session.name) == 'undefined'){
      req.session.name = null;
    }
    res.render("questions",{top_data:top_data, name:req.session.name});
});

});

router.post("/", function(req, res, next){

    var data = req.body;

    console.log("data = ",data);

    var q = new questions();

    q.title = data.title;
    q.tags = data.laji;
    q.content = data.content;
    q.ctime = data.ctime;
    q.puber = [req.session.name];
    q.ltime = parseInt(new Date().getTime()/1000);



    q.save(function(err, doc){

       if (err) {
         console.log(err);
       } else {
         return res.redirect("/");
         console.log(doc);

       }

    });

    // return res.redirect("/");


});

module.exports = router;
