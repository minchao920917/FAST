var express = require('express');
var router = express.Router();

/* GET later listing. */
router.get('/', function(req, res, next) {
	var laterData ={
		"title":"晚餐预定",
		"needToDo":"3",
		"status":"1",//0表示未预定，1表示已经预定
		"account":"www.911izan.com",
		"name":"闵超",
		"time":"2017-08-31"
	}
  res.render('later/later',laterData);
});

module.exports = router;
