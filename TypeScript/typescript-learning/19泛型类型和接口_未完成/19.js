"use strict";
(function () {
    //普通函数
    function info(msg, age) {
        return msg;
        // 匿名函数
        // let info2 = function(name:string,age:number):string{
        //     return name + '年龄为:'+age
        // }
        var info2 = function (msg) {
            return msg;
        };
        // 左边为类型，箭头右边为返回值，箭头函数表示返回类型
        var info3 = function (name, age) {
            return name + '年龄为：' + age;
        };
    }
})();
