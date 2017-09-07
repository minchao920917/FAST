var express = require('express');
var router = express.Router();

/* GET search listing. */
router.get('/', function(req, res, next) {
  res.render('search/search', { title: '查找' });
});

module.exports = router;
