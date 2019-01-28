# 云平台 前端统一配置文件

适用以下项目
- 云平台 cloud
- 互动讨论 discuss-frontend
- 连线题 填空题  question-container  question-student
- 互联网版课堂  classroom-html5
- 待继续补充

## 使用说明

不能在webconfig.js中 直接增加 配置定义，因为不被提交，是临时文件

需要增加时，需要先更改webconfig_xxx.js文件，然后对应修改webconfig.js

webconfig_xxx.js中xxx指的相应平台，如果没有相应平台配置文件，请任意复制一下更改

## 引入方式
```
 // cdn方式引入
 <script type="text/javascript" src="/webconfig/webconfig.js"></script>
```