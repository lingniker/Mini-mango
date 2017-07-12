var express = require('express');
var router = express.Router();

<<<<<<< HEAD
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
=======
/* GET denglu page. */
router.get('/', function(req, res, next) {
  res.send("denglu is ok!");
>>>>>>> 03019f0ac2818585a3be7f8c6adb69c0c7f97a93
});

module.exports = router;
