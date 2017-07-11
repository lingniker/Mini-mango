var express = require('express');
var router = express.Router();

/* GET questions page. */
router.get('/', function(req, res, next) {
  res.send("questions is ok!");
});

module.exports = router;
