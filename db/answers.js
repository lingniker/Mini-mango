var mongoose = require("./mongoose");

var Schema = mongoose.Schema;
var answerSchema = new Schema({
  issuesid: String,
  content: String,
  ctime: Number,
  ansuser: Array,
  comments: {
    type: Number,
    default: 0
  },
  likes: {
    type: Number,
    default: 0
  },
  unlikes: {
    type: Number,
    default: 0
  },
  isaccept: {
    type: Boolean,
    default: false
  }
});
var answers = mongoose.model("answers", answerSchema);

/*测试代码*/
// var m = new answers({
//
//   issuesid: "黄文倩哈哈哈",
//   content: "问题黄文倩",
//   ctime: 1499928081033,
//   ansuser: ["yoonghuID", "yonghuNick"]
// });
// m.save(function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("save is ok");
//   }
// });

module.exports = answers;
