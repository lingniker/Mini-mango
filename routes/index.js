var express = require('express');
/*引用数据库模块，需要那个引用哪个*/
var users = require('../db/users');
var questions = require('../db/questions');
var answers = require('../db/answers');
var tags = require('../db/tags');


var router = express.Router();


/* GET home page. */
// \/([0-9]{1,2})?




router.get("/", function(req, res, next) {//主页
  questions.find({}).sort({"ltime":-1}).skip(0).limit(20).exec(function(err,data_que){

    if(err){
      console.log(err);
    }else{
      users.find({}).sort({'likes':-1}).limit(10).exec(function(err,datas){
    if(err){
      console.log(err);
    }else{
      users.findOne({
        nick:req.session.name // ======== ? 登录状态下的用户名
      },function(err,top_data){
        // console.log(data);
        if(typeof(req.session.name) == 'undefined'){
          req.session.name = null;
        }
      res.render('index',{ active0:"active",active1:"",active2:"",active3:"",page:"a",data_que:data_que, data_use:datas, top_data:top_data, name:req.session.name})

    });
  }
});
}
});
});
router.get("/index_hot", function(req, res, next) {//热门回答
  questions.find({}).sort({'answers':-1}).skip(0).limit(20).exec(function(err,data_que){

    if(err){
      console.log(err);
    }else{
      users.find({}).sort({'likes':-1}).limit(10).exec(function(err,datas){
    if(err){
      console.log(err);
    }else{
      users.findOne({
        nick:req.session.name // ======== ? 登录状态下的用户名
      },function(err,top_data){
        // console.log(data);
        if(typeof(req.session.name) == 'undefined'){
          req.session.name = null;
        }

      res.render('index',{ active0:"",active1:"active",active2:"",active3:"",page:"b",data_que:data_que, data_use:datas, top_data:top_data, name:req.session.name})

    });
  }
});
}
});
});
router.get("/index_wait", function(req, res, next) {
  questions.find({"answers":0}).skip(0).limit(20).exec(function(err,data_que){

    if(err){
      console.log(err);
    }else{
      users.find({}).sort({'likes':-1}).limit(10).exec(function(err,datas){
    if(err){
      console.log(err);
    }else{
      users.findOne({
        nick:req.session.name // ======== ? 登录状态下的用户名
      },function(err,top_data){
        // console.log(data);
        if(typeof(req.session.name) == 'undefined'){
          req.session.name = null;
        }

      res.render('index',{ active0:"",active1:"",active2:"active",active3:"",page:"c",data_que:data_que, data_use:datas, top_data:top_data, name:req.session.name})

    });
  }
});
}
});
});
router.get("/#", function(req, res, next) {//最新回答
  questions.find({}).skip(0).limit(20).exec(function(err,data_que){

    if(err){
      console.log(err);
    }else{
      users.find({}).sort({'likes':-1}).limit(10).exec(function(err,datas){
    if(err){
      console.log(err);
    }else{
      users.findOne({
        nick:req.session.name // ======== ? 登录状态下的用户名
      },function(err,data){
        // console.log(data);
        if(typeof(req.session.name) == 'undefined'){
          req.session.name = null;
        }

      res.render('index',{ active0:"active",active1:"",active2:"",active3:"",page:"a",data_que:data_que, data_use:datas, data:data, name:req.session.name})

    });
  }
});
}
});
});

router.get(/\/a([0-9]{1,2})/, function(req, res, next) {
  console.log("------------------------------");

  var k = 0;
  if (req.params[0]==98) {
    console.log("lingling");
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
      }else if(k >= count){
        k = 0;
        }
      }

      questions.find({}).sort({'ltime':-1}).skip(k*20).limit(20).exec(function(err,data_que){

        if(err){
          console.log(err);
        }else{
          users.find({}).sort({'likes':-1}).limit(10).exec(function(err,datas){
        if(err){
          console.log(err);


        }else{
          users.findOne({
            nick:req.session.name // ======== ? 登录状态下的用户名
          },function(err,data){
            // console.log(data);
            if(typeof(req.session.name) == 'undefined'){
              req.session.name = null;
            }

          res.render('index',{ active0:"active",active1:"",active2:"",active3:"",page:"a",data_que:data_que, data_use:datas, data:data, name:req.session.name})

        });
        }

      });
    }
  });

});
});
router.get(/\/b([0-9]{1,2})/, function(req, res, next) {
  var k = 0;
  if (req.params[0]==98) {
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
      }else if(k >= count){
        k = 0;
        }
      }

      questions.find({}).sort({'answers':-1}).skip(k*20).limit(20).exec(function(err,data_que){

        if(err){
          console.log(err);
        }else{
          users.find({}).sort({'likes':-1}).limit(10).exec(function(err,datas){
        if(err){
          console.log(err);

        }else{
          users.findOne({
            nick:req.session.name // ======== ? 登录状态下的用户名
          },function(err,data){
            // console.log(data);
            if(typeof(req.session.name) == 'undefined'){
              req.session.name = null;
            }

          res.render('index',{active0:"",active1:"active",active2:"",active3:"",page:"b",data_que:data_que, data_use:datas, top_data:data, name:req.session.name});


        });
        }

      });
    }
  });

});
});
router.get(/\/c([0-9]{1,2})/, function(req, res, next) {
  var k = 0;
  if (req.params[0]==98) {
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
      }else if(k >= count){
        k = 0;
        }
      }

      questions.find({"answers":0}).skip(k*20).limit(20).exec(function(err,data_que){

        if(err){
          console.log(err);
        }else{
          users.find({}).sort({'likes':-1}).limit(10).exec(function(err,datas){
        if(err){
          console.log(err);

        }else{
          users.findOne({
            nick:req.session.name // ======== ? 登录状态下的用户名
          },function(err,data){
            // console.log(data);
            if(typeof(req.session.name) == 'undefined'){
              req.session.name = null;
            }
            res.render('index',{active0:"",active1:"",active2:"active",active3:"",page:"c",data_que:data_que, data_use:datas, data:data, name:req.session.name})


        });
        }

      });
    }

  });
});
});









module.exports = router;
