# hd-mall-fe

女朋友的毕设： 
商城， 包含小程序、PC端、管理系统平台

## 基础
使用的是 lerna + yarn work space 


## 小程序部分


## admin 部分
### 项目启动
**添加代理配置文件**
`packages/admin/config/devProxy.js`：
```js
module.export = [
  {
    context: ['/api/'],
    target: 'http://ip:port',
  },
];
``` 


## client 部分
### 项目启动
**添加代理配置文件**
`packages/client/config/devProxy.js`：                   
```js
module.export = [
  {
    context: ['/api/'],
    target: 'http://ip:port',
  },
];
```
