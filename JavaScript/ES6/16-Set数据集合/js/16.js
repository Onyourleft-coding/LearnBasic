/*一、
* Set数据集合
* */
//1.es6之前只有数组一种数组结构，而现在提供了Set和Map两种集合
//2.Set集合是一种无重复元素的列表，使用new Set()方法创建Set集合
//创建一个Set集合
let set = new Set();
set.add(1);
set.add(2);
set.add(2);
set.add("2");
set.add("c");
console.log(set);
console.log(set.size);
//向集合添加了五个元素，只有四个有效，并且2和字符串'2'不冲突，空对象也不冲突

//2.我们也可以通过构造函数传递参数的方式进行初始化集合，比如接受一个数组
//通过构造参数初始化集合
let set2 = new Set([1, 2, 2, 3, 3, 4, 5]);
console.log(set2);
//Set(5) { 1, 2, 3, 4, 5 }

//4.使用has()方法查找是否存在指定元素，注意2和‘2’是两个元素，不会隐式转换
console.log(set.has(2));//true
console.log(set.has("2"));//true

//5.还可以使用delete()删除指定元素，clear()清空元素
console.log(set.delete(2));
console.log(set);//Set(3) { 1, '2', 'c' }
console.log(set.clear());
console.log(set);//Set(0) {}

//我们可以使用...语法，将Set集合转换为数组
//将set集合转换为数组
let array = [...set2];
console.log(array);//[ 1, 2, 3, 4, 5 ]

//7.我们可以使用for或者forEach来遍历Set集合
//for...of遍历
for (let i of set2) {
    console.log(i);//分别打印1 2 3 4 5
}

//forEach遍历
//在Set集合中key和value都是值
//s表示set集合本身
set2.forEach(function (key, value, s) {
    console.log(value);
//分别打印1 2 3 4 5
});

//8.Set集合还提供对对象的Weak Set集合，添加非对象类型会报错
//9.Weak Set集合支持add()\has()和delete()方法
//10-正则表达式的扩展改进.Weak Set不支持遍历，内部隐藏（无法查看内容），不支持for和forEach
//11-数值的扩展改进.对于应用场景来说，存放对象的弱引用，不用担心对象被回收后引发的问题
//强引用
let set3 = new Set(),
    obj = {1: 1};
set3.add(obj);
console.log(set3);
//Set(1) { { '1': 1 } } 引用存在

//移出引用
obj = null;
console.log(set3);//引用依然存在
//Set(1) { { '1': 1 } }

//弱引用
let ws = new WeakSet(),
    obj2 = {2: 2};
ws.add(obj2);
console.log(ws.has(obj2));//true 引用存在

//移出引用
obj2 = null;
console.log(ws.has(obj2));//false 随着销毁而释放
