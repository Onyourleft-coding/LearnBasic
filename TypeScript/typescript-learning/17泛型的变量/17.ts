(function () {
  //   function info(msg: any): any {
  //     return msg;
  //   }
  //   console.log(typeof info(100));
  // 泛型
  function info<T>(msg: T): T {
    return msg;
  }
  //   console.log(typeof info(100));
  //类型检查
  console.log(info<string>("Mr.lin"));
})();
