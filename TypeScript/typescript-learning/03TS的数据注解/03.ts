// typescript是一款面向对象的静态数据类型的语言
// 这里所谓的静态：当我们确定了一个类型的变量，这个变量的类型将不可改变
// 而类型的声明方式为：变量：类型名称，这种语法叫做类型注解

// 强制变量必须是整值整形
let num: number = 100;
//再赋值时必须是数值整形
num = 300;
//输出这个值
console.log(num);
//查看这个值的类型
console.log(typeof num); //number

// 对于函数的参数可以设置类型注解，而函数本身的返回值也可以设置类型注解
// 参数是number，返回值是string
function info(x: number): string {
  return x + "Mr.lin";
}
console.log(info(num));
//箭头函数写法
let fn = (x: number): string => x + "Mr.lin";
console.log(fn(num));

//数组注解，来限定数组内的值必须是指定的类型
//数组注解，意思为数组内的元素必须是number
let arr: number[];
//都是整型
arr = [1, 2, 3];
console.log(arr); //[1,2,3]

//如果说，我们要的数组元素第一个是数组，第二个是字符串，那该如何处理？
// ts提供了元素来声明书组内元素的数据类型
let arr2: [number, string];
arr2 = [1, "2"];
console.log(arr2); //[1,'2']

//ts的特殊类型
/*
1. any(任意值)
2. null(不存在的对象)
3. undefined(声明但未初始化赋值)
4. void(空值，无返回)
 */

//any任意值
let other: any = "Mr.lin";
other = 100;
console.log(typeof other); //number any会自动推断当前赋值的类型

//左边null是类型，右边null是一个null值
let other2: null = null;
console.log(null); //null
console.log(typeof null); //object

//未赋值的a
let b;

//a符合other类型
let other3: undefined = b;
console.log(other3);

function info2():void{
    //如果有返回则错误
    //return 123;
    console.log('123');
}

//常规的其他类型都支持注解，比如布尔型和字符串型
// 布尔值
let flag : boolean = true
console.log(flag);//true

//将数值转换成布尔值也支持
let flag2 :boolean = Boolean(1)
console.log(flag2);//true

//字符串类型，和数值拼接后也是字符串
let str:string = "Mr.lin" +100
console.log(typeof str); //string
