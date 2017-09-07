var express = require('express');
var router = express.Router();

/* GET meeting listing. */
router.get('/', function(req, res, next) {
  res.render('meeting/meeting', { title: '会议管理' });
});

module.exports = router;
