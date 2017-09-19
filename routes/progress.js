var express = require('express');
var router = express.Router();

/* GET progress listing. */
router.get('/', function(req, res, next) {

	var progress = [
		{
			"name":"小领导",
			"handlerTime":"2017-08-31:18:23:22",
			"handlerMessage":"同意请假",
			"status":"批准"
		},{
			"name":"大领导",
			"handlerTime":"2017-09-01:18:23:22",
			"handlerMessage":"批准",
			"status":"批准"
		},
	];
  res.render('progress/progress', { title: '审批历史', progress:progress });
});
module.exports = router;