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
(function () {
    //抽象类
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }
        //公共方法
        Person.prototype.abc = function () {
            return 'abc';
        };
        return Person;
    }());
    //子类
    var Man = /** @class */ (function (_super) {
        __extends(Man, _super);
        function Man(name, age) {
            return _super.call(this, name, age) || this;
        }
        //实现run()
        Man.prototype.run = function () {
            return this.name + "年龄为：" + this.age;
        };
        return Man;
    }(Person));
    var m = new Man("Mr.lin", 21);
    console.log(m.run());
    console.log(m.abc());
})();
// new Person()无法实例化
