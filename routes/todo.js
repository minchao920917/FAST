var express = require('express');
var router = express.Router();

/* GET todo listing. */
router.get('/', function(req, res, next) {
  res.render('todo/todo', { title: '代办事项' ,needToDo:"3"});
});

module.exports = router;
