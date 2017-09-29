var express = require('express');
var router = express.Router();

/* GET faq listing. */
router.get('/', function(req, res, next) {

	var faqData = {
		"title":"FAQ",
		"needToDo":"3",
		"faqHistory":[
			{
				"id":"1",
				"title":"考试科目一应该注意哪些要点?"
			},			
			{
				"id":"2",
				"title":"考试科目二应该注意哪些要点?"
			},			
			{
				"id":"3",
				"title":"考试科目三应该注意哪些要点?"
			},			
			{
				"id":"4",
				"title":"考试科目四应该注意哪些要点?"
			},			
			{
				"id":"5",
				"title":"成为国家主义应该注意哪些情况?"
			}
		]
	}
  res.render('faq/faq', faqData );
});

/* GET faqList listing. */
router.get('/faqList', function(req, res, next) {
	console.log(req.query.text);
	var faqListData = {
		"title":"FAQ:"+req.query.text,
		"needToDo":"3",
		"faqList":[
			{
				"id":"1",
				"title":"考试科目一应该注意哪些要点？",
				"people":"minchao",
				"time":"2017-01-12 18:90:21",
				"content":"100道题，80分算及格"
			},			
			{
				"id":"2",
				"title":"考试科目二应该注意哪些要点？",
				"people":"minchao",
				"time":"2017-01-12 18:90:21",
				"content":"科目二分为小四项和倒车入库"
			},			
			{
				"id":"3",
				"title":"考试科目三应该注意哪些要点？",
				"people":"minchao",
				"time":"2017-01-12 18:90:21",
				"content":"大路考"
			},			
			{
				"id":"4",
				"title":"考试科目四应该注意哪些要点？",
				"people":"minchao",
				"time":"2017-01-12 18:90:21",
				"content":"50道题，80分算及格"
			},			
			{
				"id":"5",
				"title":"成为国家主主席应该注意哪些要素？",
				"people":"minchao",
				"time":"2017-01-12 18:90:21",
				"content":"长得帅，不贪污，不腐败"
			}
		]
	}
  res.render('faq/faqList', faqListData );
});

/* GET faqDetail listing. */
router.get('/faqDetail', function(req, res, next) {
	console.log(req.query.id);
	var faqDetail = {
		"title":"FAQ详情",
		"needToDo":"3",
		'autor':"minchao",
		'time':"2017-06-02 19:21:31",
		'heading':"远方有一个地方种有我们的梦想?",
		"faqContent":[
			{
				"people":"同事A",
				"time":"2017-01-12 18:90:21",
				"content":"你可以从网上买了一个保时捷的钥匙，以后出去泡妞把它放在桌上，不知多威风哦……"
			},			
			{
				"people":"同事B",
				"time":"2017-01-12 18:90:21",
				"content":"如果得手后女生要坐车怎么办呀"
			},			
			{
				"people":"同事C",
				"time":"2017-01-12 18:90:21",
				"content":"就说喝酒不能开车，搭TAXI回去"
			},			
			{
				"people":"同事D",
				"time":"2017-01-12 18:90:21",
				"content":"你真好你真好你可否成为我的宝"
			},			
			{
				"people":"同事E",
				"time":"2017-01-12 18:90:21",
				"content":"生气不好生气不好生气容易变老"
			}
		]
	}
  res.render('faq/faqDetail', faqDetail );
});

module.exports = router;