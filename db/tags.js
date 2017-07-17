var mongoose = require("./mongoose");
var Schema = mongoose.Schema;
var tagsSchema = new Schema({
    tag: String,
    tagtags:{type:String},
    focus:{type:Number,default:0},
    describe: String
});
var tags = mongoose.model("tags",tagsSchema);

/*测试代码*/
// var m = new tags({
//   tag: "html5",
//   tagtags:"前端开发",
//   focus:10,
//   describe: "（英文：HyperText Markup Language，HTML）是为“网页创建和其它可在网页浏览器中看到的信息”设计的一种标记语言．"
// });
// m.save(function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("save is ok");
//   }
// });

module.exports = tags;
