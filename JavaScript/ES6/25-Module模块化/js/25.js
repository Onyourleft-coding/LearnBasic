/*一、es6模块化
* 1.es6支持模块化设计，也能其他后端语言一样使用导入导出的功能
* 2.我们首先，创建一个要被导入的模块module.js，具体如下*/
//3.再创建一个js文件，导入module.js
import {name} from './module';

console.log(name);
//这种导入导出的方式属于es6模块，仅支持浏览器模式