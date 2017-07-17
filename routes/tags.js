var express = require('express');
var router = express.Router();
var tagtags = require("../db/tagtags");
var tags = require("../db/tags");
var users = require("../db/users");
var assert = require("assert");
/* GET tags page. */
router.get(/^\/$/, function(req, res, next) {
  var asd = [];
  var asd2 = [];
  // 查询标签板块
  tagtags.find({},function(err,doc){
    if(err){
      console.log(err);
    }else{
      console.log(doc);
      console.log(doc[0].tags);
      // console.log((doc[0].tags)[0]);

      // 查询各板块下对应的标签
      for(var i=0,len=doc.length;i<len;i++){
        tags.find({tagtags:doc[i].tagtags},function(err,data2){
          if(err){
            console.log(err);
          }else{
            asd = asd.concat(data2);
          }
        });
      };
      // 查询用户所关注的标签
      users.find({nick:"shaoxu"},function(err,data1){
        if(err){
          console.log(err);
        }else{
          // console.log("标签数：",data1[0].tagfocuslist.length);
          for(var j=0,len=(data1[0].tagfocuslist).length;j<len;j++){
            tags.find({tag:(data1[0].tagfocuslist)[j]},function(err,data2){
              if(err){
                console.log(err);
              }else{
                asd2 = asd2.concat(data2);
              }
            });
          }
        }
      });
      setTimeout(function(){
        console.log("asd:",asd);
        if(asd.length !== 0){
          // console.log("====",asd);
          users.findOne({
            nick:req.session.name // ======== ? 登录状态下的用户名
          },function(err,top_data){
            // console.log(data);
            if(typeof(req.session.name) == 'undefined'){
              req.session.name = null;
            }
          return res.render("tags",{info:doc,biaoqian:asd,biaoqian2:asd2,top_data:top_data, name:req.session.name});
        });
        }
      },100);
    }
  });
});

module.exports = router;
