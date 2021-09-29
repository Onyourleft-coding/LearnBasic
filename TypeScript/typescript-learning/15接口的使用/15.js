"use strict";
(function () {
    //子类去实现
    var Man = /** @class */ (function () {
        function Man() {
            this.name = "Mr.lin";
            this.age = 100;
        }
        Man.prototype.run = function () {
            return this.name + "的年龄为 " + this.age;
        };
        Man.prototype.def = function () {
            return 'def';
        };
        return Man;
    }());
    var m = new Man();
    console.log(m.run());
})();
