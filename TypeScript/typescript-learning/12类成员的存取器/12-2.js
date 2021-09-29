"use strict";
(function () {
    var Person = /** @class */ (function () {
        // private _name: string;
        // private _age: number;
        // //构造方法
        // constructor(_name: string, _age: number) {
        //   this._name = _name;
        //   this._age = _age;
        // }
        //声明和构造简写方案：语法糖
        function Person(_name, _age) {
            this._name = _name;
            this._age = _age;
        }
        Object.defineProperty(Person.prototype, "name", {
            //getter
            get: function () {
                return this._name;
            },
            //setter
            set: function (name) {
                this._name = name;
            },
            enumerable: false,
            configurable: true
        });
        Person.prototype.run = function () {
            return this._name + "年龄为：" + this._age;
        };
        return Person;
    }());
    var p = new Person("Mr.lin", 21);
    //这里的p.name调用的是set里面的方法
    p.name = "Miss.wang";
    console.log(p.name);
    console.log(p.run());
})();
