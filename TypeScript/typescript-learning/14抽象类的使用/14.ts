(function () {
  //抽象类
  abstract class Person {
    constructor(protected name: string, protected age: number) {}
    //需要被子类实现的方法
    abstract run(): string;

    //公共方法
    abc(){
        return 'abc'
    }
  }
  //子类
  class Man extends Person {
    constructor(name: string, age: number) {
      super(name, age);
    }
    //实现run()
    run(): string {
      return this.name + "年龄为：" + this.age;
    }
  }
  let m = new Man("Mr.lin", 21);
  console.log(m.run());
  console.log(m.abc());
  
})();
// new Person()无法实例化
