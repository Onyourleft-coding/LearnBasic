/*一 其他解构
es6除了提供对象和数据解构外，还提供了很多适用的结构方案
如果你想要让某个变量的值进行交换，不必需要第三个变量参与
* */
// let key = 1;
// let value = 'Mr.lin';
// //交换值
// [key,value] = [value,key]
// //解构操作，变量互换
// console.log(key)
// console.log(value)
// console.log(key+value)

/*如果函数的返回值是一个数组或对象，直接将函数进行赋值解构*/
// function fn() {
//     return ['Mr.lin', 100, '男'];
// }
// //
// let [name, age, gender] = fn();
// console.log(name)
// console.log(age);
// console.log(gender);

//对象解构方式
// function fn2() {
//     return {
//         name: 'Mr.lin',
//         age: 100,
//         gender: '男'
//     };
// }
//
// let {name, age, gender} = fn2();
// console.log(name)
// console.log(age);
// console.log(gender);
//当函数进行参数传递的时候，可以进行数组和对象字面量方式的传参 自动解构
// function fn([name,age,gender]) {
//     console.log(name);
//     console.log(age);
//     console.log(gender);
//
// }
// fn(['Mr.lin',100,'男']);

//对象 自动解构
// function fn({name,age,gender}) {
//     console.log(name);
//     console.log(age);
//     console.log(gender);
// }
// fn({
//     name:'Mr.lin',
//     age:100,
//     gender:'男'
// })


//除了对象和数组可以使用解构，字符串类型的数据也可以解构
// let [x, y, z] = "ABC";
// console.log(x);//A 相当于字符串的截取
// console.log(y);
// console.log(z);
// let [, , c] = "ABC";
// console.log(c);
//
let {length:len} = 'ABC'
console.log(len) //ABC求出属性给length再赋值给len