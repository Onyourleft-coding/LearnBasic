// 枚举类型
//ts可以支持枚举enum类型，枚举是包裹关联变量的一种声明方式
//它的优势很明显，代码看上去优雅很多，提高了可读性

//创建一个枚举
enum Weeks {
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
}
console.log(Weeks.Three); //2
console.log(Weeks[2]); //Three 说明默认值从0开始，依次+1的赋值

//如果我们在枚举声明的时候，改变某个枚举的值时，后续的值会根据它进行+1赋值
enum Weeks2 {
  One = 1,
  Two,
  Three,
}
console.log(Weeks2.Three); //3
console.log(Weeks2[2]); //Two

//声明一个变量，将这个变量限定为枚举类型，而枚举类型的值是数值型
// 也就是说，虽然声明成枚举类型，但赋值为数值也是兼容的
// let num: Weeks = 10;
// let three: Weeks = Weeks.Three;
