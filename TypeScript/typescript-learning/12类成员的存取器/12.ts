(function () {
  class Person {
    private name: string;
    private age: number;
    //构造方法
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    //setxx
    setName(name: string) {
      this.name = name;
    }
    //getxxx
    getAge(){
        
        return this.name
    }
    run(): string {
      return this.name + "年龄为：" + this.age;
    }
  }
  let p = new Person("Mr.lin", 21);
  //   p.name='Mr.wang'
  p.setName('Miss.wang')
  console.log(p.getAge());
  
  console.log(p.run());
})();
