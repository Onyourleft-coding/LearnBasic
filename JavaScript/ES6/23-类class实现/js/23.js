/*一、类class
* 1.在ES6之前，JavaScript不能像其他语言php、java等有完整的类支持
* 2.我们采用了原型链实现了面向对象的功能，但从es6开始，提供了真正的类语法
* 3.当然，虽然说是真正的类语法，而本质上内部实现和原型链还是一样的
* 4.对于面向对象和类的基础概念
* 5.首先，我们创建一个基本的类，并创建构造函数（构造方法），具体如下*/

//创建一个类
class Person {
    //构造函数（构造方法）
    constructor(name) {
        //this.name是类的属性
        //name是构造参数赋值给属性
        this.name = name;
    }

    //普通方法
    run() {
        console.log("类的方法输出！" + this.name);
    }
}

//实例化一个Person对象
let p = new Person("Mr.lin");
//执行run()方法
p.run();
//输出对象的属性
console.log(p.name);//Mr.lin
//判断p是否是Person对象
console.log(p instanceof Person); //true
//判断类的类型：function
console.log(typeof Person);//function

//6.除了上面的class Person这种常规类的写法外，es6还支持表达式写法
//No.1
// let Per = class Person{};
//此时new Person会报错
// let p = new Per('Mr.lin');

//No.2
// let Person = class  {
// }

//No.3
// let p = new class{}('Mr.lin');
// p.run();


/*二、getter和setter
* 1.根据面向对象的三大定律中成员属性，我们需要对它进行封装，变成私有属性
* 2.而目前的this.name，基本是对外公开的，可以在类外取值和赋值
* 3.当我们假设类的属性是私有的，那么需要通过set()和get()方法实现*/

//创建一个类
class Person2 {
    #name; //提案，浏览器暂时不支持
//    构造函数(构造方法)
    constructor(name) {
        this.#name = name; //私有属性，类外无法访问
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }
}

let p2 = new Person2("Mr.lin");
p2.name = "Mr.wong";
console.log(p2.name);