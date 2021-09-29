"use strict";
/**
 * 面向对象的思维，类、三大特性（封装、继承、多态）
 */
// js对象示例
var person = {
    name: 'Mr.lin',
    age: 100,
    run: function () {
        console.log(this.name + '的年龄为:' + this.age);
    }
};
person.run();
//在ts中支持类的创建，下面是包含成员的属性、构造方法以及普通方法
//创建一个类
var Person2 = /** @class */ (function () {
    //构造方法
    function Person2(name, age) {
        this.name = name;
        this.age = age;
    }
    //普通方法
    Person2.prototype.run = function () {
        return this.name + '的年龄为:' + this.age;
    };
    return Person2;
}());
//实例化
var p = new Person2("Mr.lin", 88);
console.log(p.run());
