/*1.新增方法*/
//对于一些超过两个字符（四字节）的异体字，es6新增了codePointAt()方法
//两个字符的异体字，这里用？代替，文档显示不出来，上面土，下面口
let text = "吉";
console.log(text.length);//1
console.log(text.charAt(0));
// console.log(text.charAt(1));
console.log(text.charCodeAt(0));
console.log(text.charCodeAt(1)); //NaN

//超过两字符的码点，可以通过es6新增的String.fromCodePoint()得到
console.log(String.fromCodePoint(134071));

let text2 = "𠮷";
console.log(text2.length);//2
console.log(text2.charAt(0));//这里取不到值，只取了一半
console.log(text2.codePointAt(0)); //134071 十进制

// 3.es6提供normalize()方法用于有音标的符号组合形式进行统一
console.log("\u01D1");
console.log("\u004F");
console.log("\u030C");
console.log("\u004F\u030C".normalize() == "\u01D1".normalize());
console.log('----------------');
//4.es6提供了三种判断字符串的方法：includes()、startsWith()和endsWith()；
let text3 = "Hello, Mr.lin";
console.log(text3.includes("Mr.", 4));//true 带了参数 从哪里开始查起
console.log(text3.startsWith("Hello"));//true 必须从头开始查找
console.log(text3.startsWith("Mr.lin"));//false 必须从头开始查找
console.log(text3.endsWith("Mr."));//false 必须从尾巴开始查找
console.log(text3.endsWith("lin"));//true 必须从尾巴开始查找

console.log('----------------');

//5.repeat()重复字符串，padStart()补全字符串头部。padEnd()补全字符串尾部
console.log("x".repeat(5));
console.log("xyz".repeat(3));
console.log("Mr.lin".repeat(0));//空

console.log("x".padStart(6, "Mr"));
console.log("x".padEnd(5, "Mr"));
console.log('----------------');


/*二 模版字符串
* */
// 1.在es6之前，字符串内夹杂变量，我们总是通过分离和+号来连接解决的
let name = "Mr.lin",
    age = 100,
    flag = true;
    text4 = "我是" + name + ",今年" + age + "岁";
//模版语言
//还支持模板语法
text5 = `我是${name},今年${age}岁,一加一等于:${1+1}`;
//还可以模板嵌套，可以多层
text6 = `结果:${flag ? 'true' : 'false'}`;
//得到原生字符串
text7 = String.raw `我\n是`;

console.log(text4);
console.log(text5);
console.log(text6);
console.log(text7);


