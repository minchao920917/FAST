var express = require('express');
var router = express.Router();

/* GET news page. */
router.get('/', function(req, res, next) {
	var newsData={
		title: '新闻中心',
		needToDo:"3",
		news:[
			{
				'id':"1",
				'imgUrl':"/images/bing-1.jpg",
				'title':"远方有一个地方种有我们的梦想",
				'content':"闵超，江苏扬州人，2015年扬州大学信息与计算科学专业毕业毕业初期，就职于南京中软从事java工程师2015年底来苏州定居，就职于苏州奥丁科技有限公司从事初级前端工程师"
			},{
				'id':"2",
				'imgUrl':"/images/bing-2.jpg",
				'title':"某天也许会相遇相遇在这个好地方",
				'content':"先去去查看html页面的两个password型是否都赋值id了，或者你先将equalTo去掉，在重新验证下，看看是否有存在其他错误，没有在倒回来排查这个地方"
			},{
				'id':"3",
				'imgUrl':"/images/bing-3.jpg",
				'title':"我相信 终会走过这条遥远的道路",
				'content':"先去去查看html页面的两个password型是否都赋值id了，或者你先将equalTo去掉，在重新验证下，看看是否有存在其他错误，没有在倒回来排查这个地方"
			},{
				'id':"4",
				'imgUrl':"/images/bing-1.jpg",
				'title':"远方有一个地方种有我们的梦想",
				'content':"闵超，江苏扬州人，2015年扬州大学信息与计算科学专业毕业毕业初期，就职于南京中软从事java工程师2015年底来苏州定居，就职于苏州奥丁科技有限公司从事初级前端工程师"
			},{
				'id':"5",
				'imgUrl':"/images/bing-2.jpg",
				'title':"某天也许会相遇相遇在这个好地方",
				'content':"先去去查看html页面的两个password型是否都赋值id了，或者你先将equalTo去掉，在重新验证下，看看是否有存在其他错误，没有在倒回来排查这个地方"
			},{
				'id':"6",
				'imgUrl':"/images/bing-3.jpg",
				'title':"我相信 终会走过这条遥远的道路",
				'content':"先去去查看html页面的两个password型是否都赋值id了，或者你先将equalTo去掉，在重新验证下，看看是否有存在其他错误，没有在倒回来排查这个地方"
			},{
				'id':"7",
				'imgUrl':"/images/bing-1.jpg",
				'title':"远方有一个地方种有我们的梦想",
				'content':"闵超，江苏扬州人，2015年扬州大学信息与计算科学专业毕业毕业初期，就职于南京中软从事java工程师2015年底来苏州定居，就职于苏州奥丁科技有限公司从事初级前端工程师"
			},{
				'id':"8",
				'imgUrl':"/images/bing-2.jpg",
				'title':"某天也许会相遇相遇在这个好地方",
				'content':"先去去查看html页面的两个password型是否都赋值id了，或者你先将equalTo去掉，在重新验证下，看看是否有存在其他错误，没有在倒回来排查这个地方"
			},{
				'id':"9",
				'imgUrl':"/images/bing-3.jpg",
				'title':"我相信 终会走过这条遥远的道路",
				'content':"先去去查看html页面的两个password型是否都赋值id了，或者你先将equalTo去掉，在重新验证下，看看是否有存在其他错误，没有在倒回来排查这个地方"
			},{
				'id':"10",
				'imgUrl':"/images/bing-1.jpg",
				'title':"远方有一个地方种有我们的梦想",
				'content':"闵超，江苏扬州人，2015年扬州大学信息与计算科学专业毕业毕业初期，就职于南京中软从事java工程师2015年底来苏州定居，就职于苏州奥丁科技有限公司从事初级前端工程师"
			},{
				'id':"11",
				'imgUrl':"/images/bing-2.jpg",
				'title':"某天也许会相遇相遇在这个好地方",
				'content':"先去去查看html页面的两个password型是否都赋值id了，或者你先将equalTo去掉，在重新验证下，看看是否有存在其他错误，没有在倒回来排查这个地方"
			},{
				'id':"12",
				'imgUrl':"/images/bing-3.jpg",
				'title':"我相信 终会走过这条遥远的道路",
				'content':"先去去查看html页面的两个password型是否都赋值id了，或者你先将equalTo去掉，在重新验证下，看看是否有存在其他错误，没有在倒回来排查这个地方"
			},{
				'id':"13",
				'imgUrl':"/images/bing-1.jpg",
				'title':"远方有一个地方种有我们的梦想",
				'content':"闵超，江苏扬州人，2015年扬州大学信息与计算科学专业毕业毕业初期，就职于南京中软从事java工程师2015年底来苏州定居，就职于苏州奥丁科技有限公司从事初级前端工程师"
			},{
				'id':"14",
				'imgUrl':"/images/bing-2.jpg",
				'title':"某天也许会相遇相遇在这个好地方",
				'content':"先去去查看html页面的两个password型是否都赋值id了，或者你先将equalTo去掉，在重新验证下，看看是否有存在其他错误，没有在倒回来排查这个地方"
			},{
				'id':"15",
				'imgUrl':"/images/bing-3.jpg",
				'title':"我相信 终会走过这条遥远的道路",
				'content':"先去去查看html页面的两个password型是否都赋值id了，或者你先将equalTo去掉，在重新验证下，看看是否有存在其他错误，没有在倒回来排查这个地方"
			},{
				'id':"16",
				'imgUrl':"/images/bing-1.jpg",
				'title':"远方有一个地方种有我们的梦想",
				'content':"闵超，江苏扬州人，2015年扬州大学信息与计算科学专业毕业毕业初期，就职于南京中软从事java工程师2015年底来苏州定居，就职于苏州奥丁科技有限公司从事初级前端工程师"
			},{
				'id':"17",
				'imgUrl':"/images/bing-2.jpg",
				'title':"某天也许会相遇相遇在这个好地方",
				'content':"先去去查看html页面的两个password型是否都赋值id了，或者你先将equalTo去掉，在重新验证下，看看是否有存在其他错误，没有在倒回来排查这个地方"
			},{
				'id':"18",
				'imgUrl':"/images/bing-3.jpg",
				'title':"我相信 终会走过这条遥远的道路",
				'content':"先去去查看html页面的两个password型是否都赋值id了，或者你先将equalTo去掉，在重新验证下，看看是否有存在其他错误，没有在倒回来排查这个地方"
			}
		],
		informs:[
			{
				'id':"1",
				'imgUrl':"/images/bing-1.jpg",
				'title':"重要文件通知",
				'content':"通过科达远程会诊系统，漳墩卫生院与南平市第二医院呼吸内科同步开启高清视频会议，在对该患者的病历及相关各项检查进行了阅读、分析后，二院吴主任远程指导进行了详细体检，并给出了具体的治疗建议。整个会诊时间持续了约30分钟，达到了预期效果。"
			},{
				'id':"2",
				'imgUrl':"/images/bing-1.jpg",
				'title':"重要文件通知1",
				'content':"通过科达远程会诊系统，漳墩卫生院与南平市第二医院呼吸内科同步开启高清视频会议，在对该患者的病历及相关各项检查进行了阅读、分析后，二院吴主任远程指导进行了详细体检，并给出了具体的治疗建议。整个会诊时间持续了约30分钟，达到了预期效果。"
			},{
				'id':"3",
				'imgUrl':"/images/bing-1.jpg",
				'title':"重要文件通知2",
				'content':"通过科达远程会诊系统，漳墩卫生院与南平市第二医院呼吸内科同步开启高清视频会议，在对该患者的病历及相关各项检查进行了阅读、分析后，二院吴主任远程指导进行了详细体检，并给出了具体的治疗建议。整个会诊时间持续了约30分钟，达到了预期效果。"
			},{
				'id':"4",
				'imgUrl':"/images/bing-1.jpg",
				'title':"重要文件通知3",
				'content':"通过科达远程会诊系统，漳墩卫生院与南平市第二医院呼吸内科同步开启高清视频会议，在对该患者的病历及相关各项检查进行了阅读、分析后，二院吴主任远程指导进行了详细体检，并给出了具体的治疗建议。整个会诊时间持续了约30分钟，达到了预期效果。"
			},{
				'id':"5",
				'imgUrl':"/images/bing-1.jpg",
				'title':"重要文件通知4",
				'content':"通过科达远程会诊系统，漳墩卫生院与南平市第二医院呼吸内科同步开启高清视频会议，在对该患者的病历及相关各项检查进行了阅读、分析后，二院吴主任远程指导进行了详细体检，并给出了具体的治疗建议。整个会诊时间持续了约30分钟，达到了预期效果。"
			},{
				'id':"6",
				'imgUrl':"/images/bing-1.jpg",
				'title':"重要文件通知4",
				'content':"通过科达远程会诊系统，漳墩卫生院与南平市第二医院呼吸内科同步开启高清视频会议，在对该患者的病历及相关各项检查进行了阅读、分析后，二院吴主任远程指导进行了详细体检，并给出了具体的治疗建议。整个会诊时间持续了约30分钟，达到了预期效果。"
			},{
				'id':"7",
				'imgUrl':"/images/bing-1.jpg",
				'title':"重要文件通知4",
				'content':"通过科达远程会诊系统，漳墩卫生院与南平市第二医院呼吸内科同步开启高清视频会议，在对该患者的病历及相关各项检查进行了阅读、分析后，二院吴主任远程指导进行了详细体检，并给出了具体的治疗建议。整个会诊时间持续了约30分钟，达到了预期效果。"
			},{
				'id':"8",
				'imgUrl':"/images/bing-1.jpg",
				'title':"重要文件通知4",
				'content':"通过科达远程会诊系统，漳墩卫生院与南平市第二医院呼吸内科同步开启高清视频会议，在对该患者的病历及相关各项检查进行了阅读、分析后，二院吴主任远程指导进行了详细体检，并给出了具体的治疗建议。整个会诊时间持续了约30分钟，达到了预期效果。"
			},{
				'id':"9",
				'imgUrl':"/images/bing-1.jpg",
				'title':"重要文件通知4",
				'content':"通过科达远程会诊系统，漳墩卫生院与南平市第二医院呼吸内科同步开启高清视频会议，在对该患者的病历及相关各项检查进行了阅读、分析后，二院吴主任远程指导进行了详细体检，并给出了具体的治疗建议。整个会诊时间持续了约30分钟，达到了预期效果。"
			},{
				'id':"10",
				'imgUrl':"/images/bing-1.jpg",
				'title':"重要文件通知4",
				'content':"通过科达远程会诊系统，漳墩卫生院与南平市第二医院呼吸内科同步开启高清视频会议，在对该患者的病历及相关各项检查进行了阅读、分析后，二院吴主任远程指导进行了详细体检，并给出了具体的治疗建议。整个会诊时间持续了约30分钟，达到了预期效果。"
			}
		],
		recruits:[
			{
				'id':"1",
				'title':"前端招聘",
				'content':"通过科达远程会诊系统，漳墩卫生院与南平市第二医院呼吸内科同步开启高清视频会议，在对该患者"
			},{
				'id':"2",
				'title':"java招聘",
				'content':"通过科达远程会诊系统，漳墩卫生院与南平市第二医院呼吸内科同步开启高清视频会议，在对该患者"
			},{
				'id':"3",
				'title':"前台招聘",
				'content':"通过科达远程会诊系统，漳墩卫生院与南平市第二医院呼吸内科同步开启高清视频会议，在对该患者"
			},{
				'id':"4",
				'title':"测试招聘",
				'content':"通过科达远程会诊系统，漳墩卫生院与南平市第二医院呼吸内科同步开启高清视频会议，在对该患者"
			},{
				'id':"5",
				'title':"项目经理招聘",
				'content':"各公司现在都急切地想要留住招聘来的员工。"
			},{
				'id':"6",
				'title':"保洁阿姨招聘",
				'content':"他在校园招聘会上找到了第一份工作。"
			}

		]
	}
  res.render('news/news', newsData);
});

/* GET newsDetal page. */
router.get('/newDetail', function(req, res, next) {
	//console.log(req.query.id);
	var newsData ={
		'title':"新闻详情",
		'needToDo':"3",
		'autor':"minchao",
		'time':"2017-06-02 19:21:31",
		'heading':"远方有一个地方种有我们的梦想",
		'content':[
			{
				'imageURL':"/images/bing-1.jpg",
				'container':"模块时构成Node应用的组件。实际上，我们已经看到过一些模块了——我们在Node中使用的每一个Javascript文件都是一个模块。在Node里面，模块分为原生模块和文件模块,实际上只有一个都是文件模块只不过前者是Node自带的文件模块，"
			},{
				'imageURL':"/images/bing-2.jpg",
				'container':"后者是开发者自定义的模块）创建一个模块非常简单，因为一个文件就是一个模块，我们要关注的问题仅仅在于如何在其他文件中获取这个模块。"
			},{
				'imageURL':"/images/bing-3.jpg",
				'container':"Node.js提供了exports和require两个对象，其中exports是模块公开的接口，require用于从外部获取一个模块的接口，即所获取模块的exports对象"
			}
		]
	};
	res.render('news/newsDetal', newsData);
});

/* GET informsDetal page. */
router.get('/informsDetal', function(req, res, next) {
	//console.log(req.query.id);
	var informsData = {
		'title':"通知详情",
		'needToDo':"3",
		'autor':"后勤部",
		'time':"2017-06-02 19:21:31",
		'heading':"[高温补贴发放通知]",
		'dec':"根据公司制度,本年度高温补贴福利发放通知:",
		'content':[
			{	
				'name':"发放时间",
				'value':"10月初"
			},{
				'name':"发放方式",
				'value':"通过9月工资发放"
			},{
				'name':"执行月份",
				'value':"6,7,8,9月,共计四个月"
			},{
				'name':"发放金额",
				'value':"130元/月"
			},{
				'name':"享受月数",
				'value':"当月10日钱入职的员工,计算当月的高温补贴费,当月10日后的入职的员工,当月不予计算"
			},,{
				'name':"发放对象",
				'value':"正式职工,试用期对象,实习员工,劳务派遣员工"
			},{
				'name':"详细咨询",
				'value':"苏州-minchao,分机号:8776562"
			}
		]
	};
	res.render('news/informsDetal', informsData);
});

/* GET recruitsDetal page. */
router.get('/recruitsDetal', function(req, res, next) {
	//console.log(req.query.id);
	var recruitsData ={
		'title':"招聘详情",
		'needToDo':"3",
		'autor':"人力资源部",
		'time':"2017-06-02 19:21:31",
		'heading':"[前端招聘]",
		'content':[
			{	
				'name':"岗位需求",
				'value':"2人"
			},{
				'name':"所在部门",
				'value':"IT部前端组"
			},{
				'name':"工作地点",
				'value':"苏州"
			},{
				'name':"岗位职责",
				'value':"负责对客户进行技术宣讲与交流;\n负责项目的方案和技术;\n能演示产品和售前测试;\n"
			},{
				'name':"任职需求",
				'value':"具有一定的网络基础;\n具有大型项目页面构建规划能力;\n具有良好的沟通能力;\n"
			}
		],
		'contact':
			{
				'people':"闵先生",
				'tel':"1321312231",
				'email':"minchao@minchao.me"
			}
		
	};
	res.render('news/recruitsDetal', recruitsData);
});
module.exports = router;
