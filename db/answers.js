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
var m = new answers({
  issuesid: "121212",
  content: "ashfahsh",
  ctime: 465,
  ansuser: ["yoonghuID", "yonghuNick"]
});
m.save(function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("save is ok");
  }
});

module.exports = answers;
