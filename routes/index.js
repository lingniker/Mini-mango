var express = require('express');
/*引用数据库模块，需要那个引用哪个*/
var users = require('../db/users');
var questions = require('../db/questions');
var answers = require('../db/answers');
var tags = require('../db/tags');


var router = express.Router();


/* GET home page. */
router.get(/\/([0-9]{1,2})?/, function(req, res, next) {
  // res.render('index', { title: 'Express' });
  var k = 0;
  if (req.params[0]==00) {
    k++;
  }else if(req.params[0] == 99) {
    k--;
  }else{
    k = req.params[0];
  }
   var count;
    questions.count({},function(err,n){
      if(err){
        console.log(err);
      }else{
        count = Math.ceil(n/20) ;
        console.log(count);
          console.log("-------",k);
       if(k < 0){
        k = 0;
      }else if(k > count){
        k = 0;
        }
      }

      questions.find({}).skip(k*20).limit(20).exec(function(err,data_que){

        if(err){
          console.log(err);
        }else{
          users.find({}).sort({'likes':-1}).limit(10).exec(function(err,data){
        if(err){
          console.log(err);

        }else{
          res.render('index',{data_que:data_que,data_use:data})
        }
      });
        }

      });
  });

});








module.exports = router;
