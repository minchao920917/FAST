var express = require('express');
var router = express.Router();

var multiparty = require('multiparty');
var util = require('util');
var fs = require('fs');


/* GET list listing. */
router.get('/', function(req, res, next) {
  res.render('list/list', { title: '图片上传' ,needToDo:"3"});
});

/* 上传*/
router.post('/uploading', function(req, res, next){


  //生成multiparty对象，并配置上传目标路径
  var form = new multiparty.Form({uploadDir: './public/files/'});
  //上传完成后处理
  form.parse(req, function(err, fields, files) {

  	var  originalFilename = "./public/files/"+files.file[0].originalFilename;
    var filesTmp = JSON.stringify(files,null,2);

    if(err){
      // console.log('解析错误: ' + err);
    } else {
      // console.log('文件对象: ' + filesTmp);
       //同步重命名文件名
      fs.renameSync(files.file[0].path,originalFilename);

      console.log('文件对象: ' + filesTmp);
    }
    res.json([0, '上传成功!']);
 });

});


module.exports = router;
