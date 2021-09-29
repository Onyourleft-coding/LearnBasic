/*一、类的继承
* 1.es6也支持子类继承父类，使用extends管家你在实现*/
class Person {
    //父类
//    当子类继承了父类，实例化子类后，就可以直接拥有父类的构造、属性和方法
    constructor(name) {
        this.name = name;
    }

    get user() {
        return this.name;
    }

    set user(value) {
        this.name = value;
    }

    run() {
        return "name:" + this.name;
    }
}

class Children extends Person {
    //子类继承
}

//子类继承父类后，父类的构造，set和get以及方法均可使用
let c = new Children("Mr.lin");
c.user = "Mr.wong";
console.log(c.user);//Mr.wong
console.log(c.run());//name:Mr.wong

//3.继承之后一般来说，我们需要覆写父类，然后对子类进行增强
class Children2 extends Person {
    //子类继承
    constructor(name, age) {//覆写构造
        super(name);//执行父类构造并传参
        this.age = age;
    }

    run() {//覆写方法
        return super.run() + this.age;//执行父类方法并返回内容
    }
}

//覆写
let c2 = new Children2("Mr.lin", 100);
console.log(c2.run());
//super作为函数时，调用父类构造，而作为对象时，在普通方法返回指定父类方法

//4.可以使用Object.getPrototypeOf()判断子类是否继承了父类
console.log(Object.getPrototypeOf(Children) === Person);//true
console.log(Object.getPrototypeOf(Children2) === Person);//true

//5.es6的类支持静态属性和方法，也支持静态被子类继承
class Person2 {
    static gender = "男";

    static go() {
        return "GOGOGO!" + Person2.gender;
    }
}

class Children3 extends Person2 {
    static gender = "女"; //覆写静态
    static go() {
        return " o o o" + Person2.gender;//这里使用的Person2和Children2是不一样的
    }
}

console.log(Person2.gender);//男
console.log(Person2.go());//GoGoGo!男
console.log(Children3.gender);//女
console.log(Children3.go());//ooo 男