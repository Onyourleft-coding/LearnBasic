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
// 人类
var Person1 = /** @class */ (function () {
    // 构造方法
    function Person1(name, age) {
        (this.name = name), (this.age = age);
    }
    //执行run普通方法
    Person1.prototype.run = function () {
        return this.name + "的年龄为：" + this.age;
    };
    return Person1;
}());
//子类，男人
var Man = /** @class */ (function (_super) {
    __extends(Man, _super);
    function Man() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Man;
}(Person1));
//子类，女人
var Woman = /** @class */ (function (_super) {
    __extends(Woman, _super);
    function Woman() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //独有的成员
        _this.food = "早餐";
        return _this;
    }
    //   独有的方法
    Woman.prototype.eat = function () {
        return this.name + "吃" + this.food;
    };
    return Woman;
}(Person1));
var m = new Man("男人", 30);
console.log(m.run());
var w = new Woman("女人", 28);
console.log(w.run());
console.log(w.eat());
// 孙子类，老妇女 多重继承
var OldWoman = /** @class */ (function (_super) {
    __extends(OldWoman, _super);
    function OldWoman() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return OldWoman;
}(Woman));
var o = new OldWoman('老妇人', 68);
console.log(o.eat());
