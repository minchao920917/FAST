var express = require('express');
var router = express.Router();

/* GET ehr listing. */
router.get('/', function(req, res, next) {

	var ehrs =[
		{
			type:"加班转调休",
			reason:"驾照科目二考试",
			status:"已审批",
			applyTime:"2017-08-31",
			id:"1"
		},{
			type:"休假",
			reason:"驾照科目二考试",
			status:"已审批",
			applyTime:"2017-08-31",
			id:"2"
		},{
			type:"病假",
			reason:"感冒发烧",
			status:"未审批",
			applyTime:"2017-08-31",
			id:"3"
		}
	];
  res.render('ehr/ehr', { title: 'EHR', ehrs:ehrs });
});

/* GET ehr 子路由 ehrDetail. */
router.get('/ehrDetail', function(req, res, next) {
	//console.log(req.query.id);
	var ehrDeatil= {

		title:"我的请假单",
		ehrMessage:[{
					name:"年度",
					value:"2017第三季度"
				},{
					name:"假别",
					value:"加班转调休"
				},{
					name:"休假人",
					value:"闵超"
				},{
					name:"请假工时",
					value:"8.0"
				},{
					name:"开始时间",
					value:"2017-08-31 09:00:00"
				},{
					name:"结束时间",
					value:"2017-09-01 17:00:00"
				},{
					name:"事由",
					value:"驾照考试科目一"
				}],
		id:req.query.id
	};

	res.render('ehr/ehrDetail', ehrDeatil);
})
module.exports = router;
