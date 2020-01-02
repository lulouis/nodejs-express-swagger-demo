var express = require('express');
var router = express.Router();

//默认路由
router.get('/', function(req, res, next) {
  res.redirect("/swagger");
});

module.exports = router;
