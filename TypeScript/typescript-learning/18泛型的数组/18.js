"use strict";
(function () {
    //普通数组
    var arr = [1, 2, 3, 4, 5];
    // T[]
    //泛型数组
    var arr2 = [1, 2, 3, 4, 5, 6];
    // Array<T>
    function setArr(value) {
        return [value, value, value];
    }
    console.log(setArr("m"));
    function setArr2(value) {
        var result = [value, value, value];
        console.log(result.length);
        return result;
        // return [value,value,value]
    }
    console.log(setArr2("C"));
    // 多个泛型
    function more(name, age) {
        return [name, age];
    }
    console.log(more('Mr.lin', 100));
})();
