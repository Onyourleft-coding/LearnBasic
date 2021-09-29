(function () {
  //接口 类型
  interface Person {
    name: string;
    age?: number;
    run(): string;
  }
  // 对象自变量
  let man: Person = {
    name: "Mr.lin",
    age: 21,
    run() {
      return this.name + "年龄为" + this.age;
    },
  };
  console.log(man.run());
  
})();
