/*回顾19，Promise解决了异步对层回调混乱且执行顺序的问题
了解一下Promise对象异步操作的三种状态
.Pending(进行中)
.Fulfilled(已成功)
.Rejected(已失败)

当异步操作执行后，它得到的结果来决定其状态，其他任何操作都无法改变
Promise状态只有两种运行方式，从Pending到Fulfilled或Rejected
而当状态已经固定后，此时就变成了Resolved(完成),关键字详解
pending->resolve 方法 ->fulfilled -> resolved
pending->reject 方法->rejected -> resolved
测试当前状态，在浏览器环境下比较直观直接，console.log(p1)，在不同状态下执行
* */

let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('1.异步')
    },3500)
})
let p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('2.异步')
    },800)
})
let p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('3.异步')
    },1000)
})
console.log(p1);
//19使用了三段Promise实例完成了三段异步的排序输出问题
// p1.then(value => {
//     console.log(value);
//     console.log(p1);
//     return p2;
// }).then(value => {
//     console.log(value);
//     return p3;
// }).then(value => {
//     console.log(value);
// })

//Promise有一个all的方法 以一个数组排序，根据这个数组的顺序输出值
// let p = Promise.all([p1,p2,p3])
// p.then(value => {
//     console.log(value);
// })

//Promise提供了一个rece()方法，只输出第一个改变状态的实例,谁先返回了就输出谁，其他的不管了
let p = Promise.race([p1,p2,p3])
p.then(value => {
    console.log(value);
})

//Promise语法糖
//快捷返回resolve或reject,直接返回一个成功或失败的案例
let ps = Promise.resolve('成功');
console.log(ps);
ps.then(value => {
    console.log(value);
})

//最常用场景
function getP(){
    //最常用场景 类型一致性
    if(false){
        return new Promise(resolve => {
            resolve('成功了');
        })
    }else {
        return Promise.resolve(0);//强制类型一致保持程序正确性Promise.resolve(0)
    }
}

getP().then(value => {
    console.log(value);
})