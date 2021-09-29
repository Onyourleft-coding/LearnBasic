(function () {
  interface Person {
    name: string;
    age: number;
    run(): string;
  }
  //子类去实现
  class Man implements Person, Abc {
    name: string = "Mr.lin";
    age: number = 100;
    run(): string {
      return this.name + "的年龄为 " + this.age;
    }
    def():string{
        return 'def'
    }
  }
  interface Abc {
    def(): string;
  }
  let m = new Man();
  console.log(m.run());
})();
