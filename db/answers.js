var mongoose = require("./mongoose");

var Schema = mongoose.Schema;
var answerSchema = new Schema({
    name: String,
    age: Number,
    DOB: Date,
    isAlive: Boolean
});
var answers =  mongoose.model("answers",answerSchema);

// /*测试代码*/
// var m = new answers({
//   name: "lisi",
//   age: 18,
//   DOB: "05-06-2017",
//   isAlive: true
// });
// m.save(function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("save is ok");
//   }
// })
//
// module.exports = answers;
