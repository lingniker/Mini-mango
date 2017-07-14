## 数据库使用须知
* 远程数据库路径
> var url = ("mongodb://mango:1@ds155132.mlab.com:55132/mini-mango");
* 本地数据库路径
> var url = ("mongodb://127.0.0.1:27017/Mango");
## 注意
1. 前后台数据交互用到数据库时，调试期间建议用本地数据库，在本地创建一个Mango数据库；
2. 使用时，不要忘了在当前路由文件下引用数据库里相关的模块．
## mongoose 使用方法和一些常用的命令

* var answer = require("../db/answers.js");   //链接answes集合
* var question = require("../db/questions.js");   //链接answes集合
* var tog = require("../db/togs.js");     //链接answes集合
* var user = require("../db/users.js");   //链接answes集合

* user.findOne({"name":"lisi"},function(err,data){   //查找一个
});  

* user.count({name:"lisi"}，function(err,n){   //统计个数

});



   
   参考
   
   http://blog.csdn.net/tengzhaorong/article/details/16802109
