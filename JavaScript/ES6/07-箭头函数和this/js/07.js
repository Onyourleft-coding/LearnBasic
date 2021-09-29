/*一，箭头函数的使用*/
// let fn = name => name;
// console.log(fn('Mr.lin'))
/*翻译成函数代码为* */
// let fn = function(name){
// return name;
// }
// console.log(fn('Mr.lin'));

//2.箭头参数也可以传递两个或以上的参数，并实现运算后返回
// let fn = (x,y) =>x+y;
// console.log(fn(10,20));
/*
* 翻译函数
* let fn = function(x,y){
* return x + y;
* }*/
// function test(x){
//     return x++;
// }
//
// console.log(test(10));
// let test = x =>++x;
// console.log(test(10));


//3.如果你定义的函数，并不需要传递参数，可以用()括号方式直接返回
// let fn = () => 'Mr.lin';
// console.log(fn());
/*翻译代码为
* let fn = function(){
* return 'Mr.lin';
* }*/

//4.如果函数体需要更复杂的操作，可以将箭头符号右边使用传统函数体
// let fn = (x,y) =>{
//     return x + y;
// }
// console.log(fn(10,23));
// function fn(x,y) {
//     return {x+y};
// }
// console.log(fn(10,23));

//5.如果箭头符号右边是对象，返回的是对象，则需要用圆括号包含着
// let fn = name => ({name: name, age: 100});
// console.log(fn("Mr.lin",).name);
// console.log(fn().age);
/*
* 翻译代码
* let fn = function(name){
* return {
* name:name,
* age:100
* }
* }*/

//6.如果箭头符号左边是对象作为参数，右边是对象的属性运算，也支持
// let fn = ({name, age}) => name + ", " + age;
// console.log(fn({name: "Mr.lin", age: 100}));
//翻译代码
// let fn = function ({name,age}) {
//     return name +","+age;
// }
// console.log(fn({name:"Mr.lin",age:100}));


//7.自我执行函数，也可以使用箭头符号来创建，具体如下
// ((name)=>{
//     console.log(name);
// })('Mr.lin');
/*
* 翻译成函数代码为
* (functio(name){
* console.log(name);
* })('Mr.lin)*/

/*
* 二 绑定this
* */
let obj = {
    name: "Mr.lin",
    age: 100,
    fn: function () {
        // 以前的方法是在外部保存this，然后就可以指向obj了
        // let that = this
        //
        // setTimeout(function () {
        // // 控制条打印两个undefined
        // // 浏览器打印一个逗号和一个undefined，是因为name是window的保留字
        // console.log(that);
        // console.log(that.name+','+that.age);
        // // 怎么指向都指向不到obj
        // },2000);

        // 箭头函数语法
        setTimeout(() => {
            console.log(this);
            console.log(this.name + "," + this.age);
        }, 500);
        //箭头函数的出现，彻底解决了this在内部指向的问题，直接指向我们所需要的
        //因为在箭头函数中的this是最外层定义的函数绑定，不受内部影响
    }
};
obj.fn();