var express = require('express');
var router = express.Router();

/* GET shengao listing. */
router.get('/', function(req, res, next) {
  res.render('shengao/shengao', { title: '产品申告' });
});

module.exports = router;
