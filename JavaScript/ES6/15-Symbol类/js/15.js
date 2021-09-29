/*一、
* Symbol类型*/
// 1.es6之前基础数据类型有：字符串、数值、布尔、对象、null和undefined
// 2.es6新增了一种叫做Symbol的基础数据类型，表示独一无二的值，类似ID
// 3.创建Symbol通过函数Symbol()完整，可以传递参数，也可以为空

//注意，不支持new Symbol()
// let s = Symbol();
// console.log(s);
// console.log(typeof s);

//4.在Symbol()函数中参数，是对变量的描述，程序无法访问，只能日志打印
//为了输出测试时，便于区分
// Symbol('s!');
// console.log(Symbol);

//5.创建两个Symbol类型的变量，来验证他们独一无二的特性
//有没有参数，或参数是否相同都不恒等
//因为Symbol是唯一的存在
// let s1 = Symbol(),
//     s2 = Symbol();
//console.log(s1 === s2);//false

//6.Symbol类型变量无法进行隐式转换，需要提前显示转换匹配的类型
//Symbol类型无法隐式转换，可显式
// let s = Symbol();
// console.log(s.toString() + "变量");
// console.log(String(s) + "变量");
// console.log(!s);//布尔值


/*二、Symbol属性
* */
//1.Symbol类型有哪些应用场景？解决了哪些问题？最常用的一种就是对象属性
//2.由于Symbol类型是独一无二的值，作为对象属性就具有唯一性不出现重名
//3.对于多模块、多人开发或者拼装属性名的情况下，有可能会出现属性名重复
//4.首先，先故意设置一个相同的对象属性名，看看会出现什么问题
//重名的属性名不报错，被覆盖
let obj = {
    name: "Mr.lin",
    name: "Mr.wang"
};
console.log(obj);
//拼装的属性名，也被覆盖
let x = "Name",
    y = "Name";
let obj2 = {
    ["user" + x]: "Mr.lin",
    ["user" + y]: "Mr.wang"
};
console.log(obj2);

//5.那么Symbol作为对象属性名，该如何使用呢？具体如下
let name = Symbol("name");
let obj3 = {
    [name]: "Mr.lin"
};
console.log(obj3);//结果为{ [Symbol(name)]: 'Mr.lin' }
//强调：上面的例子中，属性名不是name，而是[Symbol(name)]

//7.其中，参数name，要不要都无所谓，主要是为了看上去清晰
let x2 = Symbol("name");
let y2 = Symbol("name");
let obj4 = {
    [x2]: "Mr.lin",
    [y2]: "Mr.wang"
};
console.log(obj4);
//{ [Symbol(name)]: 'Mr.lin', [Symbol(name)]: 'Mr.wang' }


//8.方法名也可以使用Symbol类型
let fn = Symbol("fn");
let obj5 = {
    [fn]() {
        return "fn";
    }
};
console.log(obj5);
//{ [Symbol(fn)]: [Function: [fn]] }
console.log(obj5[fn]());
//fn