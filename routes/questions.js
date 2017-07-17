var express = require('express');
var router = express.Router();
var questions = require("../db/questions");

/* GET questions page. */
router.get('/', function(req, res, next) {

    res.render("questions");

});

router.post("/", function(req, res, next){

    var data = req.body;

    console.log("data = ",data);

    var q = new questions();

    q.title = data.title;
    q.tags = data.laji;
    q.content = data.content;
    q.ctime = data.ctime;

    q.save(function(err, doc){

       if (err) {
         console.log(err);
       } else {
         console.log(doc);
       }

    });

    // return res.redirect("/");



});

module.exports = router;
