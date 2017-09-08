var express = require('express');
var router = express.Router();

/* GET faq listing. */
router.get('/', function(req, res, next) {
  res.render('faq/faq', { title: 'FAQ',needToDo:"3" });
});

module.exports = router;