/*一、async语法
* 1.async也是处理异步的，它是对Promise的一种拓展，让异步更加方便
* 2.优势：async是基于Promise，虽然是异步操作，但看上去像同步
* 3.首先，我们先来看下async的基本语法
* */
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("异步1");
    }, 3500);
});
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("异步2");
    }, 800);
});
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("异步3");
    }, 1000);
});
//创建一个async函数，执行异步操作
//await关键字，等待异步执行完毕后回调

//es5写法
// let as = async ()=>{
//     let result = await  p2;
//     console.log(result);
// }
// as();


// async function as() {
//     let result = await p2;
//     console.log(result);
// }

//执行async函数
// as();


// async function as() {
//     let r1 = await p1,
//         r2 = await p2,
//         r3 = await p3;
//     console.log(r1);
//     console.log(r2);
//     console.log(r3);
// }
//
// as();


// async function as() {
//     let all = [await p1, await p2, await p3];
//     console.log(all);
// }
//
// as();

//async函数如果设置了返回值，这个值是Promise对象
//返回值是Promise对象
//相当于返回Promise.resolve()
async function as() {
    return 'Hello async';
}
//
// console.log(as());
// as().then(value => {
//     console.log(value);
// })

async function as(){
    let result2 = await p2;
}