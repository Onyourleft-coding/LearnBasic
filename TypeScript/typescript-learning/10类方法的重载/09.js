"use strict";
// 人类
var Person4 = /** @class */ (function () {
    // 构造方法
    // ?:表示参数可选
    function Person4(name, age) {
        (this.name = name), (this.age = age);
    }
    //执行run普通方法
    Person4.prototype.run = function (flag) {
        if (flag === true) {
            return "无法显示";
        }
        if (this.age === undefined) {
            return this.name + "的年龄为：保密~";
        }
        return this.name + "的年龄为：" + this.age;
    };
    return Person4;
}());
var p2 = new Person4("Mr.lin", 21);
console.log(p2.run(true));
var p3 = new Person4("Ms.lin");
console.log(p3.run());
