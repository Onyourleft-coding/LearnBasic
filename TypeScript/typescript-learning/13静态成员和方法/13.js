"use strict";
(function () {
    var Person = /** @class */ (function () {
        //构造方法
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }
        Person.prototype.run = function () {
            return this.name + "年龄为：" + this.age;
        };
        Person.getPI = function () {
            return "圆周率:" + Person.pi;
        };
        // 只读常量
        Person.pi = 3.14;
        return Person;
    }());
    console.log(Person.pi);
    // Person.pi = 100;
    console.log(Person.getPI());
})();
