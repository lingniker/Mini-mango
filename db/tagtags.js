var mongoose = require("./mongoose");
var Schema = mongoose.Schema;
var tagtagsSchema = new Schema({
    tagtags: String,
    tags:{type:Array,default:[]},
});
var tagtags = mongoose.model("tagtags",tagtagsSchema);

/*测试代码*/
// var m = new tagtags({
//   tagtags: "前端开发",
//   tags:["html","html5","css3","css","javascript","jquery","JSON","ajax","正则表达式","bootstrap"]
// });
// m.save(function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("save is ok");
//   }
// });

module.exports = tagtags;
