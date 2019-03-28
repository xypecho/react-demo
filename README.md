# react-demo
学完react写个demo


## 项目结构

>ps:本项目未执行`yarn eject`暴露内建的配置

```
├──  build                               
├──  config                              
├──  node_modules                          
├──  src                                    ---核心代码目录
|   ├──  assets                            
|   |    ├── images                         ---静态资源存放目录
|   ├──  common                             ---字体图标存放目录
|   ├──  components                         ---组件存放目录
|   ├──  pages                              ---页面存放目录(可复用的则封装为组件，不可以的写为页面)
|   ├──  router                             ---路由
|   ├──  store                              ---vuex相关的文件
|   ├──  tools                              
|   |    ├── index.js                       ---封装了一些常用的函数
|   ├── App.vue                           
|   ├── main.js                          
├── .eslintrc                               ---自定义eslint配置文件
├── package.json     
......                                      ---其他一些vue脚手架生成的文件就不表述了
```
