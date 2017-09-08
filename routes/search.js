var express = require('express');
var router = express.Router();

/* GET search listing. */
router.get('/', function(req, res, next) {
  res.render('search/search', { title: '查找',needToDo:"3" });
});

module.exports = router;
