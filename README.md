<p align="center">
    <span><img alt="项目logo" width="200" height="200" src="https://camo.githubusercontent.com/19728abe3a00f556321704a91111984448ffc918/687474703a2f2f6f7a637673756834742e626b742e636c6f7564646e2e636f6d2f6d69746f6f2d77656170702d6c6f676f2e706e67" /></span>

     <span><img alt="项目logo"  width="200" height="200" src="https://camo.githubusercontent.com/89d512a0c3832a8f2daf9695587ecaaea6ed8d6d/687474703a2f2f6d707675652e636f6d2f6173736574732f6c6f676f2e706e67" /></span>
</p>

## 简介

本项目主要讲解如何在mpvue框架中使用Mitoo-weapp组件库


### 项目构建

``` bash
#创建一个基于 mpvue-quickstart 模板的新项目
$ vue init mpvue/mpvue-quickstart my-project

#引入mitoo-weapp组件库
$ npm i mitoo-weapp

```
具体构建mpvue项目请参考：[mpvue官网](http://mpvue.com/mpvue/)

### 修改构建脚本


```js
# webpack.dev.conf.js

new CopyWebpackPlugin([
  {
    from: path.resolve(__dirname, '../static'),
    to: config.build.assetsSubDirectory,
    ignore: ['.*']
  },
  ## Copy component library to the dist directory
  {
    from: path.resolve(__dirname, '../node_modules/mitoo-weapp/components'),
    to: path.resolve(__dirname, config.build.assetsRoot + '/components'),
    ignore: ['.*']
  }
])

```

至此，我们就可以在mpvue框架中使用mitoo-weapp组件库了
