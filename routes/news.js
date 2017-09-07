var express = require('express');
var router = express.Router();

/* GET news page. */
router.get('/', function(req, res, next) {
  res.render('news/news', { title: '新闻中心' });
});

module.exports = router;
