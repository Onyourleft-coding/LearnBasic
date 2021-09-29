//枚举类型
//ts可以支持枚举enum类型,枚举是包裹关联变量的一种声明方式
// 创建一个枚举
var L_Weeks;
(function (L_Weeks) {
    L_Weeks[L_Weeks["One"] = 0] = "One";
    L_Weeks[L_Weeks["Two"] = 1] = "Two";
    L_Weeks[L_Weeks["Three"] = 2] = "Three";
    L_Weeks[L_Weeks["Four"] = 3] = "Four";
    L_Weeks[L_Weeks["Five"] = 4] = "Five";
    L_Weeks[L_Weeks["Six"] = 5] = "Six";
    L_Weeks[L_Weeks["Seven"] = 6] = "Seven";
})(L_Weeks || (L_Weeks = {}));
console.log(L_Weeks.Three); //2
console.log(L_Weeks[2]); //Three 说明默认值从0开始,依次+1的赋值
// 如果我们在枚举声明的时候,改变某个枚举的值时,后续的值会根据它进行+1赋值
var L_Weeks2;
(function (L_Weeks2) {
    L_Weeks2[L_Weeks2["One"] = 1] = "One";
    L_Weeks2[L_Weeks2["Two"] = 2] = "Two";
    L_Weeks2[L_Weeks2["Three"] = 3] = "Three";
})(L_Weeks2 || (L_Weeks2 = {}));
console.log(L_Weeks2.Three); //3
console.log(L_Weeks2[2]); //Two
//声明一个变量,将这个变量限定为枚举类型,而枚举类型的值是数值型
// 也就是说,虽然声明成枚举类型,但赋值为数值也是兼容的
var L_num = 10;
var L_Three = L_Weeks.Three;
console.log("L_num", L_num);
console.log("L_Weeks", L_Three);
