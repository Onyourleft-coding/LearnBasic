/*一、迭代器和生成器
* 1.迭代器(Iterator)，用于给数据结构提供统一的访问遍历的机制
* 2.es6之前的迭代器比较麻烦，而现在引入了生成器对象，让迭代器更加容易
* 3.首先创建一个生成器，方法名前面加上*号，迭代的内容之前使用yield;
* */

//生成器
function* cit() {
    yield 1;
    yield 2;
    yield 3;
}

//1,2,3是我们要遍历的值，下面我们要创建迭代器
//4.迭代器对象的.next()方法，类似指针，每次执行将下移一行
//创建迭代器
let it = cit();
//每执行一次.next()将下移一行
console.log(it.next());//1 done:false表示如果下面还有要遍历的元素，如果有则是false，没有元素了则是true
console.log(it.next());//2 false
console.log(it.next());//3 false
console.log(it.next());//undefined true
//属性值value得到值，没有返回undefined，当没有值了，done则返回true

//5.生成器结合循环语句，并且进行传递数组进行迭代
function* cit2(items) {
    for (let i = 0; items.length; i++) {
        yield items[i];
    }
}

let it2 = cit2([1, 2, 3, 4, 5]);
console.log(it2.next().value);//只输出value
//{ value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: undefined, done: true }
// 1
//如果作为匿名函数使用：let cit = function *(items)；


/*二、默认迭代接口*/
//1.很多数据结构类型拥有默认迭代接口，比如Array、Map、Set等等
//2.对于原生就支持迭代器的数据结构，我们不用自己编写生成器迭代器
//3.最简单的迭代方式，就是使用for()...of迭代语句去遍历即可
//4.对于Array数组类型，它提供了有关三个方法：keys()\values()\entries()
let items2 = ['a', 'b', 'c', 'd', 'e'];
console.log(items2.keys());//keys Object [Array Iterator] {}
console.log(items2.values());//values Object [Array Iterator] {}
console.log(items2.entries());//key+value Object [Array Iterator] {}

//5.最简单的迭代方法，就是使用for...of迭代语句去遍历即可
//for..or遍历得到value值
for(let i of items2.keys()){
    console.log(i);
}
console.log('--------------');
for (let i of items2.values()) {
    console.log(i);//分别打印1 2 3 4 5
}
console.log('--------------');
for(let i of items2.entries()){
    console.log(i);//打印他们的键和值
}

//6.虽然for..or特别方便，不过你想要.next语法也是支持的
let values = items2.values();
console.log(values.next());
//{ value: 1, done: false }