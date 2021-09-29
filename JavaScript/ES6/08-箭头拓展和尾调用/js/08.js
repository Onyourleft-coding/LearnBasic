/*一 箭头拓展*/
//1.箭头也支持一些内置函数的使用，比如sort()排序
// let arr = [3, 1, 2].sort((a, b) => a - b);
// console.log(arr);
//
// let arr2 = [1,3,5,4].sort((a, b)=>a -b);
// console.log(arr2);
/*翻译函数代码**/
// let arr = [3,1,2].sort(function (a,b){
//     return a -b;
// })
// console.log(arr);


//2.箭头函数不支持arguments绑定，请直接使用...other模式(rest运算符)
//下面这种写法不支持
// let fn = (x,y) =>{
//     return arguments[0] +arguments[1];
// };
//不确定参数时使用...other
// let fn = (...other) =>{
//     return other[0] + other[1];
// };
// console.log(fn(10,20));
//
//
// //3.箭头函数和普通函数一样，都可以被typeof和instanceof
// console.log(typeof fn);//function
// console.log(fn instanceof Function);//true


/*二 尾调用优化*/

//1.什么是尾调用？即在一个函数的最后可执行的一步调用了其他函数
// function go(x) {
//     return x + 20;
// }
//
// let fn = function (x) {
//     return go(x);
// };
// console.log(fn(10));

//应用场景
//递归
'use strict';
function fn(x) {
    console.log(x);
    if (x <= 1) {
        return 1;
    }
    return fn(x - 1);
    //这里如果数据太多，就会产生很多垃圾，开启严格模式就行了
}
fn(10);