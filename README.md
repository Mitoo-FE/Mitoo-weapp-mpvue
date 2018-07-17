<p align="center">
    <img alt="mitoo-weapp" width="200" src="http://ozcvsuh4t.bkt.clouddn.com/mitoo-weapp-logo.png" />
    <img alt="mpvue" width="200" src="http://mpvue.com/assets/logo.png" />
</p>

## 简介

本项目主要讲解如何在mpvue框架中使用Mitoo-weapp组件库


### 项目构建

```bash
#创建一个基于 mpvue-quickstart 模板的新项目
$ vue init mpvue/mpvue-quickstart my-project

#引入mitoo-weapp组件库
$ yarn add mitoo-weapp

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
### 添加组件脚本
```js
#在入口文件中添加组件的引用
export default {
    config: {
        'navigationBarTitleText': 'Mitoo-weapp & Mpvue',
        'usingComponents': {
            'mit-panel': '/components/Panel/index',
            'mit-cell-group': '/components/CellGroup/index',
            'mit-cell': '/components/Cell/index'
        }
    }
}
```
至此，我们就可以在mpvue框架中使用mitoo-weapp组件库了

### 工程示例
```js
#clone项目到本地
git clone git@github.com:Mitoo-FE/Mitoo-weapp-mpvue.git

#安装依赖
yarn install
或
npm install

#启动项目
npm run dev

打开微信开发者工具，选择dist目录为小程序的根目录

```
* 注：目前工程示例中，只有layout，grid，accordion能够跳转，具体使用，请参考代码
