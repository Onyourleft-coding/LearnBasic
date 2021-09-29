(function () {
  //普通数组
  let arr: number[] = [1, 2, 3, 4, 5];
  // T[]
  //泛型数组
  let arr2: Array<number> = [1, 2, 3, 4, 5, 6];
  // Array<T>
  function setArr(value: any): Array<any> {
    return [value, value, value];
  }
  console.log(setArr("m"));
  function setArr2<T>(value: T): Array<T> {
    let result: T[] = [value, value, value];
    console.log(result.length);

    return result;
    // return [value,value,value]
  }
  console.log(setArr2<string>("C"));
// 多个泛型
  function more<T, P>(name: T, age: P): [T, P] {
    return [name, age];
  }
  console.log(more<string,number>('Mr.lin',100));
  
})();
