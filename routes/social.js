var express = require('express');
var router = express.Router();

/* GET social listing. */
router.get('/', function(req, res, next) {
	var data = {
		name:"minchao",
		money:"13212.22",
		record:[
			{
				"name":"工资收入",
				"time":"2017-09-19 17:32:22",
				"value":"+10000"
			},{
				"name":"奖励",
				"time":"2017-06-19 17:32:22",
				"value":"+4000"
			},{
				"name":"公积金",
				"time":"2017-06-19 17:32:22",
				"value":"-600"
			},{
				"name":"社保",
				"time":"2017-04-19 17:32:22",
				"value":"-600"
			},{
				"name":"信用卡还款",
				"time":"2017-07-19 17:32:22",
				"value":"-1600"
			}
		]
	};
  res.render('ehr/social', { title: '余额',imgUrl:"/images/bw-2014-06-19.jpg",data:data});
});


module.exports = router;