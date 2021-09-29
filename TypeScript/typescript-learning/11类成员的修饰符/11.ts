// 闭包解决重名问题
(function () {
  //人类
  class Person {
    protected name: string;
    protected age: number;
    //构造方法
   protected constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    //执行run普通方法
    run(): string {
      return this.name + "的年龄为 " + this.age;
    }
  }
  class Man extends Person{
     public constructor(name: string, age: number){
          super(name,age,)
      }
      run():string{
          return this.name + '的年龄为：'+this.age
      }
  }
//   let p = new Person("Mr.lin", 100);
//   console.log(p.name);
//   p.name = "Miss.wang";
//   console.log(p.name);
//   console.log(p.run());
let p = new Man("Mr.lin",21);
console.log(p.run());

})();
