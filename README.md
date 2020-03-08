# 打造自己的vue组件库并上传到npm

## 组件库两个关键环节

1. 组件传参
2. 插槽

## 项目目录结构

```
zock-ui
│  babel.config.js
│  info.txt
│  package.json
│  README.md
│  vue.config.js
│  yarn.lock
│  
├─lib
│  │  demo.html
│  │  package.json
│  │  README.md
│  │  zock-button.common.js
│  │  zock-button.common.js.map
│  │  zock-button.css
│  │  zock-button.umd.js
│  │  zock-button.umd.js.map
│  │  zock-button.umd.min.js
│  │  zock-button.umd.min.js.map
│  │  
│  └─img
│          iconfont.858c3aef.svg
│          
├─packages
│  │  index.js
│  │  
│  ├─button
│  │  │  index.js
│  │  │  
│  │  └─src
│  │          Button.vue
│  │          
│  └─fonts
│          demo.css
│          demo_index.html
│          iconfont.css
│          iconfont.eot
│          iconfont.js
│          iconfont.json
│          iconfont.svg
│          iconfont.ttf
│          iconfont.woff
│          iconfont.woff2
│          
├─public
│      favicon.ico
│      index.html
│      
└─src
    │  App.vue
    │  main.js
    │  
    └─assets
            logo.png
            
```



## 开发流程

> 本项目参考饿了么Button组件
>
> https://element.eleme.cn/#/zh-CN/component/button

![](https://github.com/zockbell/zock-button/blob/master/src/assets/01.png)

1. 使用```vue create zock-ui```构建项目

   <img src="https://github.com/zockbell/zock-button/blob/master/src/assets/02.png" style="zoom:50%;" />

2. 在`zock-ui`根目录下创建`packages`用来存放自己的组件

3. `packages`里新建组件`button`,每个组件中新建`src`目录和`index.js`文件

4. `button`下 `src`中新建组件.vue文件，这里主要是组件的内容

5. `button`下`index.js`主要是暴露install安装

6. `packages`下`index.js`是将所有组件引入并根据用户安装匹配

   <img src="https://github.com/zockbell/zock-button/blob/master/src/assets/03.png" style="zoom:50%;" />

7. 在项目的`package.json`的`"scripts"`新增`lib`,如下图配置

   ```js
   "scripts": {
       "serve": "vue-cli-service serve",
       "build": "vue-cli-service build",
       "lint": "vue-cli-service lint",
       "lib": "vue-cli-service build --target lib --name zock-button --dest lib packages/index.js"
     },
   ```

8. 执行命令`npm run lib`打包，会生成项目目录下的`lib`文件，此文件上传npm即可让用户使用

   在lib目录下新建`package.json`,如下：

   ```js
   name: 包名，该名字是唯一的。可在 npm 官网搜索名字，如果存在则需换个名字。
   version: 版本号，每次发布至 npm 需要修改版本号，不能和历史版本号相同。
   description: 描述。
   main: 入口文件，该字段需指向我们最终编译后的包文件。
   keyword：关键字，以空格分离希望用户最终搜索的词。
   author：作者
   private：是否私有，需要修改为 false 才能发布到 npm
   license： 开源协议
   ```

   

   ```js
   {
     "name": "zock-button",
     "version": "1.0.0",
     "description": "基于vue的button按钮",
     "main": "zock-button.umd.js",
     "author": "zock",
     "license": "ISC"
   }
   
   ```

   

9. 连接npm，使用命令`npm adduser`连接自己npm的帐号和密码

10. 上传到npm，使用命令`npm publish`

    ![](https://github.com/zockbell/zock-button/blob/master/src/assets/04.png)

## 本项目npm地址

[zock-button](https://www.npmjs.com/package/zock-button)

> https://www.npmjs.com/package/zock-button

![](https://github.com/zockbell/zock-button/blob/master/src/assets/05.png)

## 项目验证

项目流程：

1. `main.js`中引入

   ```js
   import zock from 'zock-button';
   import 'zock-button/zock-button.css';
   
   Vue.use(zock);
   ```

   

2. 在组件中使用：

   ```vue
   <zock-button type="success">按钮</zock-button>
   ```

   

<img src="https://github.com/zockbell/zock-button/blob/master/src/assets/06.png" style="zoom:50%;" />

