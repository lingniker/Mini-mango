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
      // console.log(doc);
      // console.log(doc[0].tags);
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

      if(req.session.name !== undefined){
        users.find({nick:req.session.name},function(err,data1){
          if(err){
            console.log(err);
          }else{
            // console.log("标签数：",data1[0].tagfocuslist.length);
            if(data1[0].tagfocuslist.length !== 0){
              // console.log("======",data1[0].tagfocuslist);
              for(var j=0,len=(data1[0].tagfocuslist).length;j<len;j++){
                tags.find({tag:(data1[0].tagfocuslist)[j]},function(err,data2){
                  if(err){
                    console.log(err);
                  }else{
                    asd2 = asd2.concat(data2);
                  }
                });
              }
            }else{
               asd2 = [];
            }
          }
        });
      }else{
         asd2 = [];
      }

      setTimeout(function(){
        // console.log("asd:",asd);
        if(asd.length !== 0){
          // console.log("====",asd);
          users.findOne({
            nick:req.session.name // ======== ? 登录状态下的用户名
          },function(err,top_data){
            // console.log(data);
            if(err) console.log(err);
            if(typeof(req.session.name) == 'undefined'){
              req.session.name = null;
            }
            console.log("doc:",doc);
          return res.render("tags",{info:doc,biaoqian:asd,biaoqian2:asd2,top_data:top_data, name:req.session.name});
        });
      }
      },10);
    }
  });
});

module.exports = router;
