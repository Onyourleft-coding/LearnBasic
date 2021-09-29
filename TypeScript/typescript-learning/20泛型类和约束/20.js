"use strict";
(function () {
    function info(msg) {
        console.log(msg.length); //报错，有些数据没有length
        return msg;
    }
    console.log(info('Mr.lin'));
    var Person = /** @class */ (function () {
        function Person(_name, _age) {
            this._name = _name;
            this._age = _age;
        }
        Object.defineProperty(Person.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Person.prototype, "age", {
            get: function () {
                return this._age;
            },
            enumerable: false,
            configurable: true
        });
        return Person;
    }());
    var p = new Person('Mr.lin', 100);
    console.log(p.name);
    console.log(p.age);
})();
