var express = require('express');
var router = express.Router();
var users = require('../db/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  users.findOne({"nick":"yuanping"},["info"],function(err,data){   //查找一个
    console.log(data);

    res.render("info",{data:data});
   });
});

module.exports = router;
