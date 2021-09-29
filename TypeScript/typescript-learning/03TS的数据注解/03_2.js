// L_表示这是第二次学习
// 类型的声明方式为:变量:类型名称,这种语法叫做类型注解
// 强制变量必须为整型数值
var number = 100;
console.log("初次赋值", number);
// 再次赋值时必须是数值整型
number = 300;
console.log("二次赋值", number);
// 赋一个浮点型数值
number = 300.1;
console.log("第三次赋值", number);
// number = '111'; 赋值字符串直接报错提醒
//查看这个值的类型
console.log(typeof number);
// 对于函数的参数可以设置类型注解,而函数本身的返回值也可以设置类型注解
// 参数是number,返回值是string
function L_info(x) {
    return x + "Mr.lin";
}
console.log("调用info函数并传入一个num", L_info(10));
// 箭头函数写法
var L_fn = function (x) { return x + "Miss.zhao"; };
console.log("箭头函数写法", L_fn(10));
// 数组注解,来限定数组内的值必须是指定的类型
// 数组注解,意思为数组内的元素必须为number
var L_arr;
// 都是整型
L_arr = [1, 2, 3, 4];
console.log("L_arr", L_arr);
// 如果说,我们要的数组元素第一个是数组,第二个是字符串,那么该如何处理呢?
// ts提供了元素来声明数组内元素的数据类型
var L_arr2;
L_arr2 = [1, "2"];
console.log("L_arr2", L_arr2);
// ts的特殊类型
/*
1.any(任意值)
2.null(不存在的对象)
3.undefined(声明但为初始化赋值)
4.void(空值,无返回)
 */
// any 任意值
var L_other = "Mr.lin";
console.log("第一次时的类型为:", typeof L_other); //string
L_other = 100;
console.log("第二次的类型为:", typeof L_other); //number
//总结:any会自动推断当前赋值的类型
// 左边null是类型,右边null是一个null值
var L_other2 = null;
console.log("null", null); //null
console.log("L_other2", typeof L_other2); //object
// 未赋值的b
var L_b;
console.log("L_b", L_b); //声明未赋值为undefined
//b符合other类型
var L_other3 = L_b;
console.log("L_other3", L_other3); //undefined
function L_info2() {
    //如果有返回则错误
    // return 123;
    console.log("123");
}
// 常规的其他类型都支持注解,比如布尔型和字符串型
// 布尔值
var L_flag = true;
console.log("L_flag", L_flag); //true
// 将数值转换成布尔值也支持
var L_flag2 = Boolean(1);
console.log('L_flag2', L_flag2);
//字符串类型,和数值拼接后也是字符串
var L_str = 'Miss.Zhao' + 100;
console.log(typeof L_str);
