(
    function(){
        //普通函数
        function info<T>(msg: T,age:T):T{
            return msg

        // 匿名函数
        // let info2 = function(name:string,age:number):string{
        //     return name + '年龄为:'+age
        // }
        let info2:<T>(msg:T)=>T = function(msg){
            return msg
        }
// 左边为类型，箭头右边为返回值，箭头函数表示返回类型
        let info3:(name:string,age:number) => string = function (name,age) {
            return name + '年龄为：'+age
        }
    }
}
)()