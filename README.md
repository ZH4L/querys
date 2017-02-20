#IFE最终任务之一--问卷平台 

> A Vue.js project
本任务用了vue和webpack。

文件说明：
	1.index.html为主页，请用http协议访问，直接用file协议无发生共访问。
	2.babelrc,.package.json,webpack.config.js为npm和webpack的相关配置文件。
	3.src文件夹中为源码。main.js为主js，app.vue为主vue，components文件夹中为相关组件。

运行步骤：
	1.输入命令cnpm insall安装相关依赖包。(cnpm为淘宝npm镜像，可以通过指令安装：npm install -g cnpm --registry=https://registry.npm.taobao.org)
	2.输入命令npm run dev运行本地服务器即可。

附加说明：
	路由系统用了vue-router中的history模式。
	如要打包，请输入命令npm run build