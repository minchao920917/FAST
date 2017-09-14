var express = require('express');
var router = express.Router();

/* GET login listing. */
router.get('/', function(req, res, next) {
  res.render('login/login', { title: '登陆',needToDo:"3"});
});

module.exports = router;
