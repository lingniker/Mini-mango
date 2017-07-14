var express = require('express');
var router = express.Router();

/* GET tags page. */
router.get('/', function(req, res, next) {
  res.send("tags is ok!");
});

module.exports = router;
