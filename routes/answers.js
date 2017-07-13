var express = require('express');
var router = express.Router();
var answers = require("../db/answers");
/* GET answers page. */

router.get('/', function(req, res, next) {
  answers.findOne({_id:"5967481311e7705b6a49abdb"},function(err,data){
    // console.log(data.issuesid);
    console.log(data);
    res.render("answers",{info:data});
  })
});

module.exports = router;
