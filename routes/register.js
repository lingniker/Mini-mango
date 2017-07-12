var express = require('express');
var router = express.Router();

/* GET zhuce page. */
router.get('/', function(req, res, next) {
  res.send("zhuce is ok!");
});

module.exports = router;
