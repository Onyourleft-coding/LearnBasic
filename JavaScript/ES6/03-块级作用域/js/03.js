/*全局作用域
* 1.浏览器环境有一个顶层对象window，其属性和var 的全局变量等价
* 2.如果是window对象的内置属性，则输出默认值，而非内置则undefined
* 3.var如果设置了window对象的内置属性作为变量，则会直接覆盖
* */
// console.log(window.name);//空
// console.log(window.abc);//undefined

// console.log(name);//空
// console.log(abcd);//undefined
// var name = 'Mr.lin';
// console.log(window.name === name); //true 等价
// console.log(name);//Mr.lin
// console.log(window.name); //覆盖内置属性 Mr.lin


// var abcd = 10
// console.log(window.abcd);//10
// console.log(abcd);//10


/*块级作用域
* ES6之前只有全局作用域和函数作用域，并没有所谓的块级作用域
* 循环体和条件体就是块级作用域，也就是两个花括号区域{}
* 如果在块级区域不适用let，就会造成全局变量污染的问题
* {{{...}}}块级作用域支持多层嵌套，每一层均为封闭，只作用于此
* */
// {{{{
//     {let value = 10;
//     console.log(value);//10
//     }
//     console.log(value); //报错
// }}}}

//在ES6之前，采用自我立即执行匿名函数来防止变量污染
// (
//     function (){
//       var value =10
//     }()
// );
// console.log(value);

// {
//     //代替上面的语句
//     let value = 10
// }
// {
//     function fn(){
//         console.log('块级函数');
//     }
// }
// //能在外边访问
// fn();
{
    let fn = function (){
        console.log('块级函数')
    }
    fn();//只能在内部访问
}
// fn();//这里访问不到，报错
