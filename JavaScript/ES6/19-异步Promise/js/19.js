/*一、异步Promise
1.Promise：即异步通信编程的一种解决方案，它比传统回调式更加的强大
2.es6之前非常多层次嵌套的同步、异步、执行顺序混乱且不好维护
3.Promise就很好的解决了这些问题
* */
//创建一个Promise实例
// let p = new Promise((resolve, reject) => {
//一顿异步通信操作后，返回成功或失败
//    然后判断成功或失败去执行resolve或reject
//     if (true) {
//         // console.log('异步通信执行成功！');
//         resolve("执行成功！");
//     } else {
//         // console.log('异步通信执行失败！');
//         reject("执行失败");
//     }
// });
//上面异步成功后交给这个then去处理
// p.then((value) => {
//     console.log(value);
// }).catch((reason) => {
//     console.log(reason);
// });

//另外一种写法
// p.then((value) => {
//     console.log(value);
// },(reason) => {
//     console.log(reason);
// })

//二、实例测试
//1.模拟多层异步通信的实例测试，要异步多个内容，并按指定顺序执行
//2.先给出不进行promise异步，看他执行顺序

//模拟异步1
// setTimeout(() => {
//     console.log("异步1");
// }, 3500);

//异步2
// setTimeout(() => {
//     console.log("异步2");
// }, 800);

//异步3
// setTimeout(() => {
//     console.log("异步3");
// }, 1500);
//不管怎么调节，最终输出的结果是2 3 1 ，需求顺序要1 2 3

//3.将上面模拟异步通信进行改装
let p1 = new Promise((resolve, reject)=>{
   //模拟异步1
    setTimeout(()=>{
        console.log('异步1');
        resolve('1.异步')
    },3000)
})
let p2 = new Promise((resolve, reject)=>{
    //模拟异步1
    setTimeout(()=>{
        console.log('异步2');
        resolve('2.异步')
    },800)

})
let p3 = new Promise((resolve, reject)=>{
    //模拟异步1
    setTimeout(()=>{
        console.log('异步3');
        resolve('3.异步')
    },1500)

})
p1.then(value => {
    console.log(value);
    return p2;
}).then(value => {
    console.log(value);
    return p3;
}).then(value => {
    console.log(value);
})