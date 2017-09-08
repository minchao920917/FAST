var express = require('express');
var router = express.Router();

/* GET list listing. */
router.get('/', function(req, res, next) {
  res.render('list/list', { title: '回单上传' ,needToDo:"3"});
});

module.exports = router;
