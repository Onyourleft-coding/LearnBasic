/*一运算符拓展
* */

//1.es6提供了...三个点讲一个数组转换为逗号分割来进行处理
// function add(x, y) {
//     return x + y;
// }
//
// console.log(add(...[10, 20]));
// //既然三点运算符通过逗号分割，那么可以想象的应用场景就随意发挥
// console.log(Math.max(...[1, 2, 3])); //求最大值
// console.log([...[1, 2], ...[3, 4]]); //合并数组

/*二 方法的扩展
* */
//es6提供了Array.of()方法，弥补Array()的不足
// let items = Array(1,3,4);//如果只写一个参数就是数组的长度
// console.log(items);

// let items = Array.of(3);
// console.log(items);

//Array.from()方法，将类似数组的对象或遍历转换成真正的数组
let obj = {
    0: "name",
    1: "age",
    2: "gender",
    length: 3
};
console.log(obj);
console.log(Array.from(obj));
//对象转换成数组要求比较严格：(1).key 必须是数值或字符串数字； (2).length 设置长度，而且 key 在范围内；
//既然要求这么严格，那什么样的场景会产生这种对象？ (1).DOM 的 NodeList 集合; (2).ES6 新增的 Set 和 Map(后续内容)；

let nl = document.querySelectorAll('p')
console.log(nl); //这里只能使用浏览器输出 NodeList[p,p,p,p]

//es6提供了find()和findIndex()方法，用于查找数组中的第一个匹配的值
let items = [10, 20, 30, 40, 50];
console.log(items.find(value=>value > 19));
console.log(items.find(function (value) {
    return value > 19;
}));


//ES6 提供了 fill()方法，可以填充重写数组中的元素值；
let items2 = [10, 20, 30, 40, 50];
console.log(items2.fill('a',2,3));



//ES6 提供了 copyWithin 方法，从数组内部复制值，然后粘贴指定位置；
let items3 = [10, 20, 30, 40, 50];
//从索引 0 开始复制值 //然后把值从索引 2 开始粘贴 //参数 3 设置结束粘贴索引值
console.log(items3.copyWithin(2,0));
