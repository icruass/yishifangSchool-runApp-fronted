# 一师范跑步小程序
一师范跑步小程序是一款运行在手机小程序端的应用, 集老师管理系统, 学生跑步学习系统2个系统于一身, 
拥有师生ID登录, 师生互动, 学生跑步实时轨迹记录, 跑步竞赛, 学习答题等功能.


## 目录介绍
### componentsBusiness: 存放和业务相关的组件.

### componentsUI: 存放和业务无关的基础UI组件.

### config: 全局配置文件, 配置文字文案, 配置逻辑开关, 配置网络请求相关, 配置手机权限等.

### manager: 集中管理代码.
#### manager/message: 管理全局消息.
#### manager/router: 管理路由.
#### manager/auth: 管理权限.
#### manager/event: 管理全局事件.
#### manager/modal: 管理全局弹窗.

### node_modules: 存放npm安装的第三方库.

### pages: 存放小程序路由导航的页面组件.

### services: 服务端交互的接口.

### static: 存放静态资源.

### store: 存放数据模型, 如登陆数据模型, 权限数据模型, 用户数据模型等.

### systemLayout: 学生系统, 老师系统的包裹组件, 判断登陆权限进入不同的系统.

### utils: 公共的js方法.

### App.vue: uniapp的入口组件.

### index.html: uniapp的入口html文件.

### manifest.json: uniapp的配置文件.

### package.json: npm报管理配置文件.

### pages.json: uniapp的路由页面配置文件.

### uni.promisify.adaptor.js: 

### uni.scss uniapp的公共样式scss文件.


## 路由页
### login.vue: 登录页.
### runOverview: 跑步一栏页面总览.
### runEntrance: 跑步入口页面, 点击开始跑步进入地图.
### running: 跑步进行中页面, 计时和渲染地图轨迹.


## 技术栈介绍
### vue3, uniapp创建此项目使用vue3的语法. 官网( https://cn.vuejs.org/guide/essentials/application.html ).

### Typescript, 带类型的js, 方便代码追踪和代码提示. 官网( https://www.tslang.cn/docs/home.html ).

### HBuilderX: uniapp官方代码编辑器和打包. 官网( https://www.dcloud.io/hbuilderx.html ).

### uniapp: 项目基于uniapp框架开发, 利用HBuilderX打包成微信小程序. 官网( https://uniapp.dcloud.net.cn/ ).

### 微信小程序原生功能: 项目用到了wx小程序的原生功能. 官网( https://developers.weixin.qq.com/miniprogram/dev/framework/ ).

### UView 2.0: 基于uniapp的UI库. 官网( https://www.uviewui.com/components/intro.html ).

### zustand-vue: 简单易操作的vue3数据管理库. 官网( https://awesomedevin.github.io/zustand-vue/docs/introduce/start/zustand-vue ).


## 关键功能介绍
### 事件系统: 专门管理全局事件, 需要在UI层注入事件.



### Page组件: 由于uniapp不支持嵌套路由, 所以在每个页面的根节点包裹Page组件用来支持全局消息, 权限判断, 自定义底部导航栏等.
#### src/componentsBusiness/Page/index.vue:
	每个路由引入此组件然后包裹根节点, 方便此路由页面判断权限渲染和调用全局消息.
	
#### 全局消息: 
	Page组件传入prop: isMessage[boolean]来决定是否渲染消息组件, 为false不可在此页面逻辑调用去全局消息, 否则可以使用
	import {message} from '@/manager'; message.success('some tips.')调用全局消息.
	
#### 权限判断:
	Page组件自动获取当前页面路由, 并在权限系统内获取当前页面的权限, 如果没有权限将渲染403页面.
	
####  自定义底部导航栏:
	Page组件传入prop: isFooterTabar[boolean]来决定是否渲染全局的底部导航栏组件,为false不渲染底部导航, 否则会渲染. 默认渲染.



### 路由系统: 专门管理页面跳转, 路由守卫, 路由权限, 依赖Page组件包裹页面根节点.



### request接口系统: 专门管理后台请求接口.



### 消息系统: 专门管理消息提示, 依赖Page组件包裹页面根节点.
#### src/manager/message/index: 全局消息都在此注册, 在需要消息提示的地方导入使用点语法执行相应函数即可.
#### src/manager/message/messageStore: 记录Page组件下的uni-popup ref数据.
#### src/manager/message/messageUtilFn: message工具函数, 调用此函数唤起uni-popup提示消息.
#### src/manager/message/Message.vue: vue组件, 核心组件uni-popup, 在Page组件引入此组件注入页面.


## 关键代码介绍
### uniapp框架下的UI插件, 底部导航栏插件 (https://ext.dcloud.net.cn/plugin?id=12345). 下载在uni_modules文件夹下.

