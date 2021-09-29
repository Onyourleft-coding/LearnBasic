"use strict";
(function () {
    var Person = /** @class */ (function () {
        //构造方法
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }
        //setxx
        Person.prototype.setName = function (name) {
            this.name = name;
        };
        //getxxx
        Person.prototype.getAge = function () {
            return this.name;
        };
        Person.prototype.run = function () {
            return this.name + "年龄为：" + this.age;
        };
        return Person;
    }());
    var p = new Person("Mr.lin", 21);
    //   p.name='Mr.wang'
    p.setName('Miss.wang');
    console.log(p.getAge());
    console.log(p.run());
})();
