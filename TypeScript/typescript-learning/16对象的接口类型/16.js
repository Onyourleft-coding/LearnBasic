"use strict";
(function () {
    // 对象自变量
    var man = {
        name: "Mr.lin",
        age: 21,
        run: function () {
            return this.name + "年龄为" + this.age;
        },
    };
    console.log(man.run());
})();
