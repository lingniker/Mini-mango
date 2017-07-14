var mongoose = require("./mongoose");

var Schema = mongoose.Schema;
var userSchema = new Schema({
    phone:Number,
    nick:String,
    password:String,
    likes:{type:Number,default:0},
    focus:{type:Number,default:0},
    focuslist:{type:Array,default:[]},
    tagfocuslist:{type:Array,default:[]},
    bads:{type:Number,default:0},
    issuesf:{type:Array,default:[]},
    issuesc:{type:Array,default:[]},
    issuesr:{type:Array,default:[]},
    info:{type:Object,default:{
      address:String,
      school:String,
      wherecompany:String,
      personalurl:String
    }},
    balance:{type:Number,default:1000},
    times:{type:Number,default:0},
    bbs:{type:Object,default:{}},
    ctime:Number,
    ltime:Number
});
var users =  mongoose.model("users",userSchema);

/*数据库测试代码*/



// var m = new users({
//   nick: "shaoxu",
//   phone: 18245869785,
//   password: "123456",
//   ltime:45565,
//
// });
// m.save(function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("save is ok");
//   }
// });


module.exports = users;
