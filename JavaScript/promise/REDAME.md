## Promise的理解和使用
1. 抽象表达
   1. Promise是一门新的技术（ES6规范）
   2. Promise是JS中进行异步编程的新解决方案
   备注：旧方案是单纯使用回调函数
2. 具体表达
   1. 从语法上来说，Promise是一个构造函数
   2. 从功能上来说，Promise对象用来封装一个异步操作并可以获取其成功/失败的结果值
## 异步编程
* fs文件操作
``` require('fs').readFile('./index.html',(err,data)=>{})
```
* 数据库操作
* AJX
``` $.get('/server',(data)=>{})
```
* 定时器
``` setTimeout(()=>{},1000)
```

## 为什么要用Promise
1. 旧的：必须在启动异步任务前指定
2. promise：启动异步任务 => 返回promise对象 => 给promise对象绑定回调函数（甚至可以在异步任务结束后指定/多个）

## 支持链式调用，可以解决回调地狱问题
1. 什么是回调地狱
   回调函数嵌套使用，外部回调函数异步执行的结果就是嵌套的回调执行的条件
2. 回调地狱的缺点
   不便于阅读，不便于异常解决
3. 解决方案
   Promise链式调用

## promise的状态改变
实例对象中的一个属性 PromiseState
1. pending变成resolved / fullfilled 成功
2. pending变成rejected 失败
说明：只有这2种，且一个promise对象只能改变一次
无论变为成功还是失败，都会有一个结果数据
成功的结果数据一般称为value，失败的结果数据一般称为reason

## Promise对象的值
实例对象中的另一个属性 PromiseResult
保存着异步任务 成功/失败 的结果
* resolve
* reject
  ## API
1. Promise构造函数：Promise(excutor){}
  1. executor函数：执行器(resolve,reject)=>{}
  2. resolve函数：内部定义成功时我们调用的函数 value=>{}
  3. reject函数：内部定义失败时我们调用的函数 reason=>{}
   说明：executor会在Promise内部立即同步调用，异步操作在执行器中执行
2. Promise.prototype.then方法：(onResolved,onRejected)=>{}
   1. onResolved函数：成功的回调函数(value)=>{}
   2. onReject函数:失败的回调函数(reason)=>{}
   说明：指定用于得到成功value的成功回调和用于得到失败reason的失败回调，返回一个新的promise对象


   这里可以理解成 all是与 rece是或

3. Promise.all方法(promise)=>{}
   1. promise包含n个promise的数组
    说明：返回一个新的promise，只有所有的promise都成功才成功，只要有一个失败了直接失败
4. Promise.race方法(promise)=>{}
   1. promise包含n个promise的数组
    说明：返回一个新的promise，第一个完成的promise的结果状态就是最终的结果状态

## promise的几个关键问题
1. 如何改变promise的状态
   1. resolve(value)：如果当前是pending就会变成resolved
   2. reject(reason)：如果当前是pending就会变成rejected
   3. 抛出异常：如果当前是pending就会变成rejected
2. 一个Promise指定多个成功/失败回调函数，都会调用吗？
   当Promise改变为对应状态时都会调用
3. 改变promise状态和指定回调函数谁先谁后
   1. 都有可能，正常情况下是先指定回调再改变状态，但也可以先改变状态再指定回调
   2. 如何先改变状态再指定回调
      1. 在执行器中直接调用resolve()/reject()
      2. 延迟更长的事件才调用then()
   3. 什么时候才能得到数据
      1. 如果先指定的回调，那当状态发送改变时，回调函数就会调用，得到数据
      2. 如果先改变的状态，那当指定回调时，回调函数就会调用，得到数据
   4. promise.then()返回的新promise的结果状态由什么决定？
      1. 简单表达：由then()指定的回调函数执行的结果决定
      2. 详细表达
         1. 如果抛出异常，新promise变成rejected。reason为抛出的异常
         2. 如果返回的是非promise的任意值，新promise变成resolved，value为返回值
         3. 如果返回的是另一个新的promise，此promise的结果就会成为新promise的结果
   5. promise如何串联多个操作任务？
      1. promise的then()返回一个新的promise，可以看成then()的链式调用
      2. 通过then()的链式调用串联多个同步/异步任务
   6. promise异常传透？
      1. 当使用promise的then链式调用时，可以在最后制定失败的回调
      2. 前面任何操作出了异常，都会传到最后失败的回调中处理
   7. 中断promise链？
      1. 当使用promise的then链式调用时，在中间中断，不再调用后面的回调函数
      2. 办法：在回调函数中返回一个pendding状态的promise对象