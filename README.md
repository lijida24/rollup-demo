# rollup-demo

## 关于
一个rollup的小demo，借鉴其他开发者的思路，将开发和发版的打包进行了拆分，具体的配置请看build文件夹。
build/config.js内对dev、prod进行了相关区分
对于pollyfill的取舍，babel 7引入了相对兼容的配置，无所谓对应的好坏，仅仅看个人喜好

## 文件夹结构

``` bash
│  .babelrc
│  .eslintignore
│  .eslintrc.js
│  .gitignore
|  .npmignore
│  package-lock.json
│  package.json
│  README.md
├─build // 构建相关
│      config.js
│      merge.js
│      rollup.config.dev.js
│      rollup.config.js
│      rollup.config.prod.js
├─example
│      index.html
├─src // 开发目录
│     index.js
```
