var express = require('express');
/*引用数据库模块，需要那个引用哪个*/
var users = require('../db/users');
var questions = require('../db/questions');
var answers = require('../db/answers');
var answers = require('../db/tags');


var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(typeof(req.session.name) == 'undefined'){
    req.session.name = null;
  }

  res.render('homepage_header', { title: 'Express' , name : 'lisi'});
});

module.exports = router;
