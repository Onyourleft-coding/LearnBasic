// 人类
class Person3 {
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
class Man3 extends Person3 {
  //   重写
  // 新成员
  height: number;
  //构造方法的重写
  constructor(name: string, age: number, height: number) {
    // super关键字调用父类构造方法
    super(name, age);
    this.height = height;
  }
  //   普通方法的重写 名字必须一样
  run(): string {
    //   普通方法采用super.方法()进行调用
    return super.run() + ",身高为：" + this.height;
  }
}

//子类，女人
class Woman3 extends Person3 {}
let m3 = new Man3("男人", 30, 1.88);
console.log(m3.run());

let w3 = new Woman3("女人", 28);
console.log(w3.run());
