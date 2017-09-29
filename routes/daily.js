var express = require('express');
var router = express.Router();

/* GET daily listing. */
router.get('/', function(req, res, next) {
  res.render('daily/daily', { title: '日报',needToDo:"3"});
});

/* GET dailyEdit listing. */
router.get('/dailyEdit', function(req, res, next) {

	// console.log(req.query.date);
	var data = req.query.date;
	var dailyEdit = {
		"title":"日报编辑",
		"needToDo":"3",
		"data":data
	}
		
	res.render('daily/dailyEdit', dailyEdit);

});
module.exports = router;
