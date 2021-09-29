/**
 * 面向对象的思维，类、三大特性（封装、继承、多态）
 */
// js对象示例
let person = {
    name:'Mr.lin',
    age:100,
    run(){
        console.log(this.name + '的年龄为:'+this.age);
    }
}
person.run()

//在ts中支持类的创建，下面是包含成员的属性、构造方法以及普通方法
//创建一个类
class Person2{
    //成员字段
    name :string
    age:number
    //构造方法
    constructor(name:string,age:number){
        this.name = name
        this.age = age
    }
    //普通方法
    run():string{
        return this.name + '的年龄为:'+this.age
    }
}
//实例化
let p = new Person2("Mr.lin",88)
console.log(p.run());
