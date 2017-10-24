#		FAST系统

##		项目介绍
该系统是自己模仿手机app写的，包括新闻列表、时间选择器、FAQ、会议管理、预定页面，设置，个人中心等模块过程，只是用于练习，以边将来能快速开发。

##		项目页面

###			首页样式       __________________________________________个人中心样式_________________####


<img src="https://i.loli.net/2017/09/07/59b0bc6b8265c.jpg" width="50%" /><img src="https://i.loli.net/2017/09/07/59b0bc6b47514.jpg" width="50%" />




###		修改密码样式(登陆后用户修改)_______________________________________倒计时验证码



<img src="https://i.loli.net/2017/09/08/59b2599628cb5.png" width="50%" /><img src="https://i.loli.net/2017/09/19/59c0f847d4c80.png" width="50%" />

###		新闻列表________________________________________________________新闻详情



<img src="https://i.loli.net/2017/09/08/59b259963a213.jpg" width="50%" /><img src="https://i.loli.net/2017/09/08/59b259962a67a.jpg" width="50%" />

###		通知列表________________________________________________________通知详情

<img src="https://i.loli.net/2017/09/08/59b259963d825.jpg" width="50%" /><img src="https://i.loli.net/2017/09/08/59b25995e99d3.jpg" width="50%" />



###		招聘列表________________________________________________________招聘详情

<img src="https://i.loli.net/2017/09/08/59b259961d1a0.jpg" width="50%" /><img src="https://i.loli.net/2017/09/08/59b25995d865b.jpg" width="50%" />

###		考勤列表________________________________________________________考勤详情

<img src="https://i.loli.net/2017/09/19/59c0f8482b261.png" width="50%" /><img src="https://ooo.0o0.ooo/2017/09/19/59c0f847cbab1.png" width="50%" />

###		审批历史________________________________________________________钱包

<img src="https://i.loli.net/2017/09/19/59c0f848440d8.png" width="50%" /><img src="https://i.loli.net/2017/09/19/59c0f8490a2ba.png" width="50%" />

###		日报主页________________________________________________________日期选择

<img src="https://i.loli.net/2017/09/27/59cb339ea4c3d.png" width="50%" /><img src="https://i.loli.net/2017/09/27/59cb339e6a11b.png" width="50%" />

###		日报编辑________________________________________________________日报编辑2

<img src="https://i.loli.net/2017/09/29/59cda39442831.jpg" width="50%" /><img src="https://i.loli.net/2017/09/29/59cda39447c65.png" width="50%" />

###		FAQ主页______________________________________________________FAQ

<img src="https://i.loli.net/2017/09/29/59cda3944179a.jpg" width="50%" /><img src="https://i.loli.net/2017/09/29/59cda39441b0c.jpg" width="50%" />

###		FAQ问题详情________________________________________晚餐预定

<img src="https://i.loli.net/2017/09/29/59cda3945c868.jpg" width="50%" /><img src="https://i.loli.net/2017/10/13/59e06914abcd2.jpg" width="50%" />
###		晚餐预定弹框________________________________________取消晚餐预定

<img src="https://i.loli.net/2017/10/13/59e0691517465.jpg" width="50%" /><img src="https://i.loli.net/2017/10/13/59e0691529fe7.jpg" width="50%" />

###		晚餐预定弹框________________________________________取消晚餐预定

<img src="https://i.loli.net/2017/10/24/59eeb41fb367b.jpg" width="50%" />


其他页面后续完成




##		项目技术

nodejs的express框架，ejs的模板语法，amazeui的样式基础


##		目录介绍

bin文件夹，www是服务器js，启动服务器的设置在此处修改

node_modules文件夹，项目需要的包(模块)，由npm install导入

public文件夹,项目的静态文件

routes文件夹,项目的路由，后台部分

views文件夹,项目的页面文件夹

app.js项目的配置文件**极其重要**

package.json,项目的配置json

READ.md,自己写的总结，用于GitHub项目概览


##		项目启动

1.	直接下载到安装了node的机器上，并npm和express已经配置好
2.	cd到项目文件夹
3.	如果node_modules文件夹不全，需要使用npm install导入包
4.	使用npm start命令行启动项目
5.	打开浏览器，访问localhost:3000即可打开页面，F12或使用手机查看(这里不细说，之前technology项目中有如何手机访问页面)