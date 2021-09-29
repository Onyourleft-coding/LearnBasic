// executor 执行器函数
// 声明构造函数
function Promise(executor) {

    //添加属性
    this.PromiseState = 'pendding';
    this.PromiseResult = null;

    // 保存实例对象的this的值
    const self = this; //self _this that



    // resolve函数
    function resolve(data) {
        console.log(this);
        // 1. 修改对象的状态(promiseState)
        self.PromiseState = 'fulfilled'
        // 2.设置对象结果值（promiseResult）
        self.PromiseResult = data

    }
    // reject函数
    function reject(data) {
        console.log(this);
        // 1. 修改对象的状态(promiseState)
        self.PromiseState = 'rejected'
        // 2.设置对象结果值（promiseResult）
        self.PromiseResult = data
    }
    try {
        //同步调用 【执行器函数】
        executor(resolve, reject)

    } catch (error) {
        //修改promise对象的状态为失败 直接调用reject
        reject(error)
    }
}
//添加then方法
Promise.prototype.then = function (onResolved, onRejected) {

}