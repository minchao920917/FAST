var express = require('express');
var router = express.Router();

/* GET forget listing. */
router.get('/', function(req, res, next) {
  res.render('forget/forget', { title: '修改密码',needToDo:"3"});
});

module.exports = router;