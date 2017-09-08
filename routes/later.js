var express = require('express');
var router = express.Router();

/* GET later listing. */
router.get('/', function(req, res, next) {
  res.render('later/later', { title: '晚餐预定',needToDo:"3" });
});

module.exports = router;
