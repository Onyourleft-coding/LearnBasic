/*一、Map数据集合*/
//1.es6提供了Map数据集合，是一种以键值对存储的有序列表
//创建Map集合
let map = new Map();
//.set添加，支持.set(...).set(...)
map.set("name", "Mr.lin");
map.set("age", 100);
console.log(map);
//Map(2) { 'name' => 'Mr.lin', 'age' => 100 }
console.log(map.get("name"));//.get获取
//Mr.lin

//2.我们也可以通过构造函数传递参数的方式进行初始化集合，比如接收一个数组
//通过构造参数初始化集合
let map2 = new Map([
    ["name", "Mr.lin"],
    ["age", 100]
]);
console.log(map2);//Map(2) { 'name' => 'Mr.lin', 'age' => 100 }


//3.使用has()检测，delete()删除、clear()清空等对Map集合的操作
console.log(map2.has("name"));//true
console.log(map2.size);//2
map2.delete("name"); //删除
map2.clear(); //清空

//4.我们可以使用forEach来遍历Map集合
map.forEach((value, key, m) => {
    console.log(key + "-" + value);
    console.log(m);
});

//5.Map集合还提供针对对象的Weak map集合，添加非对象类型会报错
//6.WeakMap不支持遍历，内部隐藏（无法查看内容），不支持foreach和size
//7.对于应用场景来说，存放对象的弱引用，不用担心对象被回收后引发的问题
//弱引用
let wm2 = new WeakMap(),
    obj = {};
wm2.set(obj);
console.log(wm2.has(obj));//true

//移出引用
obj = null
console.log(wm2.has(obj));//false 回收了