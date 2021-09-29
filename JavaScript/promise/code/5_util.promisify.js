/* util.promisify 方法
 */
// 引入util模块
const util = require('util')
// 引入fs模块
const fs = require('fs')
// 返回一个新的函数
let mineReadFile = util.promisify(fs.readFile);

mineReadFile('../REDAME.md').then(value => {
    console.log(value.toString());
})