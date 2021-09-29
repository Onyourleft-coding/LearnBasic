// 人类
class Person1 {
  name: string;
  age: number;
  // 构造方法
  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }
  //执行run普通方法
  run(): string {
    return this.name + "的年龄为：" + this.age;
  }
}

//子类，男人
class Man extends Person1 {}

//子类，女人
class Woman extends Person1 {
  //独有的成员
  food: string = "早餐";
  //   独有的方法
  eat(): string {
    return this.name + "吃"+ this.food;
  }
}

let m = new Man("男人", 30);
console.log(m.run());

let w = new Woman("女人", 28);
console.log(w.run());
console.log(w.eat());


// 孙子类，老妇女 多重继承
class OldWoman extends Woman{
}
let o = new OldWoman('老妇人',68)
console.log(o.eat());
