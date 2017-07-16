var express = require('express');
var router = express.Router();
var users = require('../db/users');


/* GET denglu page. */
router.get('/', function(req, res, next) {
  // users.findOne({
  //
  // })
  req.session.name = null;
  res.redirect("/");
});

module.exports = router;
