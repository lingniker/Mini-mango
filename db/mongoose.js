var mongoose = require("mongoose");
// var url = ("mongodb://mango:1@ds155132.mlab.com:55132/mini-mango");
var url = ("mongodb://127.0.0.1:27017/Mango");
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
