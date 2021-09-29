// 如果我们不使用类型注解的时候,那么TS将自行对变量的类型进行推断
// 类型推断
// 第一次赋值了number,那么other就固定为number类型
let L_otherInfo = 100;
// L_otherInfo='99' //报错
console.log(typeof L_otherInfo);

// 2.如果声明变量的时候,并没有进行有效赋值,那么这个变量将是any类型
//初始化时没有赋值,那么类型将是any(反义)类型
let L_yourName;
L_yourName = "Miss.zhao";
console.log("第一次赋值L_yourname", L_yourName); //Miss.zhao

L_yourName = 520;
console.log("第二次赋值L_yourname", L_yourName); //520
console.log(typeof L_yourName);//number
