/**
 * 一、字面量类型
 * 1.我们可以将字面量作为一个类型来使用，以达到更精确的取值范围
 */
// 之前的null类型，值也是null
var L_otherByte = null;
console.log("L_otherByte", L_otherByte); //null
//声明一个类型为'Miss.zhao'字符串(字面量)的类型
var L_myName;
//下面赋值只能固定为'Miss.zhao',否则报错
L_myName = "Miss.zhao";
// 这里的'Miss.zhao'就是一种类型,那么它的值只能是'Miss.zhao',当然这样意义不大
// 声明一个性别类型,范围只有'男'和'女'
var L_gender;
//L_gender只能赋值为'男'或'女'
L_gender = "男";
console.log("L_gender", L_gender);
// 联合类型
// 1.上面我们已经使用了联合类型,即时用|来表示可支持多种类型的声明
// 2.一般可以用于普通类型的多种类型声明
// 声明一个变量,值可以是整型或字符串型
var L_numOrStr;
L_numOrStr = 100;
console.log("初次赋值", L_numOrStr);
L_numOrStr = "Miss.zhao";
console.log("二次赋值", L_numOrStr);
// 联合类型传参
function L_info(L_other) {
    return L_other;
}
console.log("L_info", L_info("Miss.zhao"));
