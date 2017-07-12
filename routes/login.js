var express = require('express');
var router = express.Router();


/* GET denglu page. */
router.get('/', function(req, res, next) {
  res.send("denglu is ok!");
});

module.exports = router;
