var express = require('express');
var router = express.Router();

/* GET answers page. */
router.get('/', function(req, res, next) {
  find({_id:zfdasdfsdf},function(err,data){
    res.render("asdsdasdad",{info:data});

  });
});
// router.get('/one', function(req, res, next) {
//   res.render();
// });


module.exports = router;
