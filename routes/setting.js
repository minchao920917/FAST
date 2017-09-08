var express = require('express');
var router = express.Router();

/* GET setting listing. */
router.get('/', function(req, res, next) {
  res.render('setting/setting', { title: '设置',needToDo:"3" });
});

module.exports = router;
