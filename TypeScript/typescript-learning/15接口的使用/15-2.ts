(function () {
  interface Person {
    //   接口实现可选
    name?: string;
    age?: number;
    run?(): string;
  }
  class Man implements Person {}
})();
