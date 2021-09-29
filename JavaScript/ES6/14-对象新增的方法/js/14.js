/*新增方法*/
//ES6 提供了 Object.is()方法来解决“===”中一些恒等中的缺点；
console.log(Object.is(100, "100"));//false,必须恒等
console.log(Object.is({}, {}));//false。分配的地址和内存指向不同
console.log(+0 === -0);//true
console.log(Object.is(+0, -0));//false
console.log(NaN === NaN);//false
console.log(Object.is(NaN, NaN));//true

//ES6 提供了 Object.assign()方法可以合并指定对象至目标对象内部；
//其实就是复制对象内容
let obj1 = {
    name: "Mr.lin",
    age: 200
};
let obj2 = {
    name: "Mr.wang",
    age: 200
};
let obj3 = {
    gender: "男"
};
// (1).如果属性有相同，后面的源对象内容会覆盖之前的属性值；
// (2).如果直接传非对象内容，会转换为对象；
// (3).如果传入的是 undefined 和 null 会报错；
console.log(Object.assign(obj1, obj2, obj3));
console.log(obj1);


//ES6 提供了 Object.getPrototypeOf()和 Object.setPrototypeof()方法；
let obj4 = {
    fn() {
        return "fn";
    }
};
let obj5 = {
    fn() {
        return "fn2";
    }
};
let f = Object.create(obj4);
console.log(f.fn());
//检测是 obj 是否 f 的原型对象
console.log(Object.getPrototypeOf(f) === obj4);//true

//设置 f 的原型对象为 obj5
Object.setPrototypeOf(f, obj5);
console.log(f.fn());


//ES6 提供了 super 关键字，用于原型中方法的继承功能
let obj6 = {
    fn3() {
        return "fn3";
    }
};
let f2 = {
    fn3() {
        return super.fn3() + " extend!";
    }
};
Object.setPrototypeOf(f2, obj6);
console.log(f2.fn3());

let h = Object.create(f2);
console.log(h.fn3());