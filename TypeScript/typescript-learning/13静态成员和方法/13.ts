(function () {
  class Person {
    // 只读常量
    static readonly pi: number = 3.14;
    private name: string;
    private age: number;
    //构造方法
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    run(): string {
      return this.name + "年龄为：" + this.age;
    }
    static getPI() {
      return "圆周率:" + Person.pi;
    }
  }
  console.log(Person.pi);
  // Person.pi = 100;
  console.log(Person.getPI());
})();
