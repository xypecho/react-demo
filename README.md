## 运行
```
git clone https://github.com/xypecho/react-demo.git
yarn install
yarn start
```


## 项目结构

>ps:本项目未执行`yarn eject`暴露内建的配置

```
├── public                                 
├── src                                    
|   ├── axios                               
|   |   ├── index.js                        ---基于axios封装的jsonp跨域方法
|   ├── components                          ---组件存放目录
|   ├── config      
|   |   ├── menuConfig.js                   ---路由配置文件                    
|   ├── pages                               ---页面
|   ├──  assets                             ---静态资源存放目录
|   |    ├── images                         ---静态资源存放目录
|   ├──  common                             ---字体图标存放目录
|   ├──  pages                              ---页面存放目录(可复用的则封装为组件，不可以的写为页面)
|   ├──  router                             ---路由
|   ├──  tools                              
|   |    ├── index.js                       ---封装了一些常用的函数
|   ├── admin.js                            ---根组件
|   ├── index.js                            ---入口文件
├── config-overrides.js                     ---自定义主题
```
