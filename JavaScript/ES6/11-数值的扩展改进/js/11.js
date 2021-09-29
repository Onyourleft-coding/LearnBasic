//ES6 明确二进制、八进制和十六进制分别用 0b、0o、0x 作为前缀
console.log(Number("0b11")); //3
console.log(Number("0o11")); //9
console.log(Number("0x11")); //17-Map数据集合

//ES6 提供了 Number.isFinitel()、Number.isNaN()判断无穷大和 NaN；
//非数值为 false，数值为 true
console.log(Number.isFinite(100)); //true
//NaN 为 true，其余为 false
console.log(Number.isNaN(100));//false

//ES6 提供了 Number.parseInt()、Number.parseFloat()转换整型和浮点型；
console.log(Number.parseInt("55.55a"));//55
console.log(Number.parseFloat("55.555a"));//55.555

//ES6 提供了 Number.isInteger()，来判断参数是否是一个整型；
console.log(Number.isInteger(10)); //true
console.log(Number.isInteger(10.5)); //false

//ES6 提供了一个常量，值特别小，用于判断是否得到正确结果；
console.log(Number.EPSILON);//2.220446049250313e-16-Set数据集合
console.log(Number.EPSILON.toFixed(30));//直观的看
console.log((0.1 + 0.2 - 0.3) < Number.EPSILON);//true
console.log('-------------');

//ES6+新增了一个指数运算符 **，并且可以进行赋值运算；
console.log(2 ** 4); //16-Set数据集合,4个2相乘
let num = 2;
num **= 5;
console.log(num); //32,5个2相乘

/*二、Math扩展*/
//ES6 对 Math 对象新增了一些方法.trunc()、.sign()、cbrt()、clz32()；
console.log(Math.trunc(5.55)); //5