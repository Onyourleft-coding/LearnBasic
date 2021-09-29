// 人类
class Person4 {
  name: string;
  age: number | undefined;
  // 构造方法
  // ?:表示参数可选
  constructor(name: string, age?: number) {
    (this.name = name), (this.age = age);
  }
  //执行run普通方法
  run(flag?: boolean): string {
    if (flag === true) {
      return "无法显示";
    }
    if (this.age === undefined) {
      return this.name + "的年龄为：保密~";
    }
    return this.name + "的年龄为：" + this.age;
  }
}

let p2 = new Person4("Mr.lin", 21);
console.log(p2.run(true));

let p3 = new Person4("Ms.lin");
console.log(p3.run());
