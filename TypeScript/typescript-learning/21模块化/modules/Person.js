"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person5 = void 0;
var Person5 = /** @class */ (function () {
    function Person5(name) {
        this.name = '';
        this.name = name;
    }
    Person5.prototype.run = function () {
        console.log(this.name + '运行了');
    };
    return Person5;
}());
exports.Person5 = Person5;
