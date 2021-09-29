/*一、简写方案*/
// ES6 可以让对象字面量中属性初始值实现简写，一定程度降低了代码量；？
//es5的写法
function fn(name, age) {
    return {
        name: name,
        age: age
    };
}

console.log(fn("Mr.lin", 100));

//es6写法
function fn2(name, age) {
    return {
        name, age
    };
}

console.log(fn2("Mr.lin", 101));

//ES6 还提供了对象字面量中方法的简写方式，也降低了一定的代码量；
//es5写法
let obj = {
    fn3: function () {
        return "es5 fn3";
    }
};
console.log(obj.fn3());

//es6写法
let obj2 = {
    fn4() {
        return "fn4";
    }
};
console.log(obj2.fn4());
console.log('----------');
/*表达式方案*/
//ES6 允许对象字面量中，使用表达式进行属性名称的拼装操作；
//拼装组合属性
let obj3 = {
    ["user" + "Name"]: "Mr.lin",
    ["user" + " Age"]: 100,
    "user Gender": "男"
};
console.log(obj3.userName);
console.log(obj3["userName"]);
console.log(obj3["user Age"]);//中间需要有空格，对应
console.log(obj3["user Gender"]);

//ES6 提供了在对象字面量中使用可计算(动态)属性名称，具体如下；
// let myName = "name";
// let obj4 = {
//     name: "Mr.lin"
//
// };
// console.log(obj4.name);
// console.log(obj4.myName);//undefined
// console.log(obj4[myName]);
//通过变量 myName 动态更改 obj 属性名
// 问题是当变量值更改了，属性名就失效了

//使用[myName]可计算属性名
// 实现了真正的动态计算
let myName = "abc";
let obj4 = {[myName]: "Mr.Lee"};
console.log(obj4[myName]);
console.log(obj4);

//es6在对象字面量方法上，也可以使用拼装名称
let obj5 = {
    ["f" + "n"]() {
        return "fn";
    }
};
console.log(obj5.fn());