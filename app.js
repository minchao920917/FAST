var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');//首页路由
var todo = require('./routes/todo');//代办路由
var search = require('./routes/search');//查找路由
var users = require('./routes/users');//个人中心路由
var news = require('./routes/news');//新闻路由
var ehr = require('./routes/ehr');//EHR路由
var daily = require('./routes/daily');//日报路由
var shengao = require('./routes/shengao');//产品申告路由
var faq = require('./routes/faq');//FAQ路由
var meeting = require('./routes/meeting');//会议管理路由
var list = require('./routes/list');//回单上传路由
var later = require('./routes/later');//晚餐预定路由
var setting = require('./routes/setting');//设置路由
var login = require('./routes/login');//登陆路由
var forget = require('./routes/forget');//忘记密码路由

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/todo', todo);
app.use('/search', search);
app.use('/users', users);
app.use('/news', news);
app.use('/ehr', ehr);
app.use('/daily', daily);
app.use('/shengao', shengao);
app.use('/faq', faq);
app.use('/meeting', meeting);
app.use('/list', list);
app.use('/later', later);
app.use('/setting', setting);
app.use('/login', login);
app.use('/forget', forget);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
 
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
