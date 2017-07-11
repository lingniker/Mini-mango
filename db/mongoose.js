var mongoose = require("mongoose");
// var url = ("mongodb://xiaolong:lxl145682@ds153412.mlab.com:53412/xiaolong");
var url = ("mongodb://127.0.0.1:27017/Mongo");
mongoose.Promise = global.Promise;
mongoose.connect(url);
var db = mongoose.connection;
db.on("error",function(){
  console.log("Connect is error!");
});

db.on("open",function(){
  console.log("Connect is ok!");
});
module.exports = mongoose;
