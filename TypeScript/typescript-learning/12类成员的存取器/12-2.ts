(function () {
  class Person {
    // private _name: string;
    // private _age: number;
    // //构造方法
    // constructor(_name: string, _age: number) {
    //   this._name = _name;
    //   this._age = _age;
    // }

    //声明和构造简写方案：语法糖

    constructor(private _name: string,private _age: number){}
    //setter
    set name(name: string) {
      this._name = name;
    }
    //getter
    get name() {
      return this._name;
    }
    run(): string {
      return this._name + "年龄为：" + this._age;
    }
  }
  let p = new Person("Mr.lin", 21);
  //这里的p.name调用的是set里面的方法
  p.name = "Miss.wang";
  console.log(p.name);
  console.log(p.run());
})();
