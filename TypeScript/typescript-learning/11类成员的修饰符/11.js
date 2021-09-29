"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 闭包解决重名问题
(function () {
    //人类
    var Person = /** @class */ (function () {
        //构造方法
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }
        //执行run普通方法
        Person.prototype.run = function () {
            return this.name + "的年龄为 " + this.age;
        };
        return Person;
    }());
    var Man = /** @class */ (function (_super) {
        __extends(Man, _super);
        function Man(name, age) {
            return _super.call(this, name, age) || this;
        }
        Man.prototype.run = function () {
            return this.name + '的年龄为：' + this.age;
        };
        return Man;
    }(Person));
    //   let p = new Person("Mr.lin", 100);
    //   console.log(p.name);
    //   p.name = "Miss.wang";
    //   console.log(p.name);
    //   console.log(p.run());
    var p = new Man("Mr.lin", 21);
    console.log(p.run());
})();
