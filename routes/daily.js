var express = require('express');
var router = express.Router();

/* GET daily listing. */
router.get('/', function(req, res, next) {
  res.render('daily/daily', { title: '日报',needToDo:"3"});
});

module.exports = router;
