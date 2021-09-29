/*es6提供了数组和对象的字面量提取相关数据的方法：解构操作
为何要使用解构操作？是因为json格式的普及，导致大量数据提取工作
而这种提取过程，在es6的解构语法中，带来了极大的便捷性
数组解构赋值，有两种基本的写法，1.分行解构，2.单行解构
* */
//解构赋值
// let info = ['Mr.lin', 100, '男'];
// let [name, age, gender] = info;
// console.log(name)
// console.log(age)
// console.log(gender)

//单行解构，以上均可输出name值

// let info = ['Mr.lin', 100, '男'],
//     [name, age, gender] = info;
// console.log(name)
// console.log(age)
// console.log(gender)

//单行解构，以上均可输出name值
// let [name ,age ,gender] = ['Mr.lin',100,'男'];
// console.log(name);
// console.log(age)
// console.log(gender);

//从上面的例子分行或单行，都可以确定必须一一完美匹配才可以正确赋值
//数组层次也需要匹配
// let [name,[age,gender]] = ['Mr.lin',[101,'男']];
// console.log(name);
// console.log(age);
// console.log(gender);
//用逗号作为占位符不赋值
// let [,,gender] = ['Mr.lin',100,'男'];

// console.log(gender)

//在变量解构时，可以在数组的元素中设置一个默认值
//当gender没有赋值时，采用默认值
// let[name,age,gender='男'] = ['Mr.lin',100];
// console.log(name)
// console.log(age)
// console.log(gender)

//还有一种...var的语法，可以将没有赋值的内容都赋值给这个变量
//不定元素，将其余以数组形式赋值给other
// let [name, ...other] = ['Mr.lin', 100, '男']
// console.log(name)
// console.log(other);


/*对象解构*/
// 这个obj常来源于json数据
// let obj = {
//     name: 'Mr.lee',
//     age: 100
// };
// let {name, age} = obj;
// console.log(name)
// console.log(age)

//如果说，解构的变量名是已经存在的变量，那么会导致如何？
// let obj = {
//     name: 'Mr.lin',
//     age:100
// },name = 'Mr.Wang';//这里不会替代Mr.lin
// ({name,age} = obj); //另外一种解构方法
// console.log(name);
// console.log(age);


//对象变量解构也可以设置一个默认值，在没有赋值时输出默认值
// let obj = {...};
// let obj = {
//     name: 'Mr.lin',
//     age: 100
// }
// let {name, age, gender = "女"} = obj;
//
// console.log(gender);


//如果不想要对象属性名作为结构变量，可以通过键值对的方式更改变量名
// let obj = {
//     name: 'Mr.lin',
//     age: 100
// }
// let {name : MyName,age : MyAge,gender='男'} = obj;
// console.log(MyName)//name失效
// console.log(MyAge)//age失效
// console.log(gender)


//在对象字面量里，还嵌套了对象，解构时也用相同的方法是解开即可
// let obj = {
//     name : 'Mr.lin',
//     age : 100,
//     info:{
//         id:1,
//         gender:'男'
//     }
// };
// let {name,age,info :{id,gender}} = obj;
// console.log(name);
// console.log(age);
// console.log(id);
// console.log(gender)


//对象的结构也支持单行的简写模式，具体如下
let {name, age} = {name: 'Mr.lin', age: 100};
console.log(name)
console.log(age)