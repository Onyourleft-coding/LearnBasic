/*首先创建一个块级区域，分别使用let和var声明一个变量*/
//块级区域
// {
//     var value = 10;
//     let count = 20;//;
// }
// console.log(value); //10
// console.log(count);//引用错误，未定义

/*var 出了块级区域有效，let出了块级区域无效
* var声明具有变量提升能力，不管在哪声明，均视为作用域顶部声明
* let不具备变量提升能力，离开区块的作用域后，则变量立刻失效
* let更适合局部变量，非常容易掌控且不会凌乱
* 变量提升还带来一个区别，就是声明之前使用时，
* */

//引用错误
// console.log(value);
// 现在提示undefined 变量提升导致逻辑怪异
// var value;


// console.log(count);
// let count;// Cannot access 'count' before initialization 放在log上面则是undefined，逻辑正确

//在一个区块内部，只要使用let声明，这个区域就形成了封闭的作用域
//如果在let声明前使用变量，这段区域就称为临时死区（暂时性死区）
// if(true){
//     //死区开始
//     value = 10;//;
//     //正常打印10
//     console.log(value);
//     //死区结束
//     //这样就报错了
//     let value;
//
// }
/*临时死区称为TDZ，使用typeof也会错误*/
// console.log(typeof value1);
// let value1;


//var声明可以重复声明一个变量，后面变量一个会替代前一个变量
// var value = 10;//;
// var value = 20;//;
// console.log(value);//20
//两个let报错，let和var各以一个也报错，更换顺序也报错
// let value1 = 10;//;
// let value1 = 20;//;
// console.log(value1)

// let value = 10;//;
// {
    // let value = 20;//;
// }
//10
// console.log(value);//访问的是外部的value

//在循环中，var和let的区别尤为明显，let只在循环体内有效
// for (var i = 0;i < 10;i++){
//     console.log(i);
// }
// console.log(i);

//let只在循环体内
// for (let i = 0;i < 10;i++){
//     console.log(i);
// }
// console.log(i);

//如果在循环体内设置函数方法，体外输出var得不到想要的值

// var list = [];
// for (var i=0;i<10;i++){
//     list[i] = function (){
//         console.log(i);
//     }
// }
// //10
// list[3]();
// //10
// list[5]();

//改成let就能获取想要的值
// let list = [];
// for (let i = 0; i < 10; i++) {
//     list[i] = function () {
//         console.log(i);
//     }
// }
//3
// list[3]();
//5
// list[5]();

//const声明
/*const声明的作用，创建一个只读的常量，一旦声明不可改变
* 和let声明一样，const声明的常量无法提升，也存在临时死区
* 和let不同的是，const声明后必须立刻赋值，否则会报错*/

const PI = 3.14;//约定俗成常量大写
console.log(PI);