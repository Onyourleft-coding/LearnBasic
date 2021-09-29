/*一 参数默认值
1.es6之前函数是无法给参数设置默认值的，而es6支持这个语法
* */
// function fn(name,
//             age = 100,
//             arr = [],
//             obj = {},
//             callback = function () {}) {
//     console.log(name)
//     console.log(age)
//     console.log(arr)
//     console.log(obj)
//     console.log(callback('callback'))
// }
// fn('Mr.lin',200,[1,2,3],{key:1},function (info){
//     return info;
// });

//2.函数参数的默认值，也可以是另一个函数的返回值
// function pi() {
//     return 3.14;
// }
//
// function fn(r, p = pi()) {
//     console.log(r * r * p);
// }
// fn(10);

//3.如果只想传递第二往后的参数，参数一保持默认值，可用undefined占位
// function fn(name = 'Mr.lin',age) {
//     //null，空都不行
//     console.log(name)
//     console.log(age)
// }
// fn(undefined,100);
//Mr.lin 100

//4.支持参数二使用参数一的值作为默认值，反之不可以
// function fn(x, y = x) {
//     //(y=x,x)错误
//     console.log(x);
//     console.log(y);
// }
// fn(2);
//5.解构变量有不定元素，那么函数的参数也可以有不定参数
// function fn(name,...other) {
//     //不定参数后
//     console.log(name)
//     console.log(other)
//
// }
// fn('Mr.lin',100,'男');
//
// fn(5);

/*二 name属性*/
// es6提供了一个name属性用于获取函数名，以方便开发者
// function fn() {
// }
// let fn2 = function () {
// }
// let obj = {
//     fn3:function () {
//     }
// }
// console.log(fn.name);
// console.log(fn2.name);
// console.log(obj.fn3.name);
// console.log((new Function ()).name);
//anonymous 匿名函数的意思

