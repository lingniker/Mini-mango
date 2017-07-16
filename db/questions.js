var mongoose = require("./mongoose");

var Schema = mongoose.Schema;
var questionSchema = new Schema({
  title:String,
  content:String,
  tags:{type:Array,default:[]},
  puber:{type:Array,default:[]},
  ctime:Number,
  offered:{type:Number,default:0},
  ansuser:{type:Array,default:[]},
  ltime:Number,
  votes:{type:Number,default:0},
  answers:{type:Number,default:0},
  scans:{type:Number,default:0},
  focus:{type:Number,default:0},
  collects:{type:Number,default:0},
  issolve:{type:Boolean,default:false}
});
var questions =  mongoose.model("questions",questionSchema);

/*测试代码*/


// var m = new questions({
//   title:"测试专用，请勿模仿",
//     content:"我也不知道改写些什么，只是为了凑够几个字而已！",
//     tags:["css3","html","javascript"],
//     votes:23,
//     ctime:parseInt(new Date().getTime()/1000),
//     ltime:parseInt(new Date().getTime()/1000),
//     answers:0,
//     scans:1,
//     puber:['xiaojinhong']
//
// });
// m.save(function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("save is ok");
//   }
// });


module.exports = questions;
