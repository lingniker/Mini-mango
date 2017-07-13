var express = require('express');
/*引用数据库模块，需要那个引用哪个*/
var users = require('../db/users');
var questions = require('../db/questions');
var answers = require('../db/answers');
var answers = require('../db/tags');


var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 users.findOne({
   nick:"shaoxu" // ======== ? 登录状态下的用户名
 },function(err,data){
   console.log(data);
   res.render('homepage-header', { data : data});

 })

  if(typeof(req.session.name) == 'undefined'){
    req.session.name = null;
  }

});

module.exports = router;
