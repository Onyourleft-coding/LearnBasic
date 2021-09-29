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
var Person3 = /** @class */ (function () {
    // 构造方法
    function Person3(name, age) {
        (this.name = name), (this.age = age);
    }
    //执行run普通方法
    Person3.prototype.run = function () {
        return this.name + "的年龄为：" + this.age;
    };
    return Person3;
}());
//子类，男人
var Man3 = /** @class */ (function (_super) {
    __extends(Man3, _super);
    //构造方法的重写
    function Man3(name, age, height) {
        var _this = 
        // super关键字调用父类构造方法
        _super.call(this, name, age) || this;
        _this.height = height;
        return _this;
    }
    //   普通方法的重写 名字必须一样
    Man3.prototype.run = function () {
        //   普通方法采用super.方法()进行调用
        return _super.prototype.run.call(this) + ",身高为：" + this.height;
    };
    return Man3;
}(Person3));
//子类，女人
var Woman3 = /** @class */ (function (_super) {
    __extends(Woman3, _super);
    function Woman3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Woman3;
}(Person3));
var m3 = new Man3("男人", 30, 1.88);
console.log(m3.run());
var w3 = new Woman3("女人", 28);
console.log(w3.run());
