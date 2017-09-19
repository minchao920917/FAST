var express = require('express');
var router = express.Router();

/* GET unusual listing. */
router.get('/', function(req, res, next) {
	var unusual =[
		{
			type:"上班未打卡",
			reason:"未查到9点之前的记录",
			status:"未处理",
			applyTime:"2017-08-31",
			id:"1"
		},{
			type:"下班未打卡",
			reason:"未查到9点之前的记录",
			status:"未处理",
			applyTime:"2017-08-31",
			id:"2"
		},{
			type:"上班未打卡",
			reason:"未查到9点之前的记录",
			status:"未处理",
			applyTime:"2017-08-31",
			id:"3"
		}
	];

  res.render('ehr/unusual', { title: '异常',unusual:unusual });
});

module.exports = router;
