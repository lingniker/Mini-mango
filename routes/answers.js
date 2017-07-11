var express = require('express');
var router = express.Router();

/* GET answers page. */
router.get('/', function(req, res, next) {
  res.send("answers is ok!");
});

module.exports = router;
