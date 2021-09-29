/*一 正则扩展*/
// let result = /吉{2}/.test('吉吉'); //true
// let result = /𠮷{2}/u.test('𠮷𠮷');//false 加上u则可以解决为true

// console.log(result);
//2.y修饰符，它的作用是当匹配过一次后继续往下匹配

// let text = 'xxx_xx_x_';
// patt = /x+_/y;
// console.log(patt.exec(text));
// console.log(patt.exec(text));
// console.log(patt.exec(text));
// console.log(patt.sticky);//true stikcy属性用来检测是否存在y修饰符
// console.log(patt.flags);//y 用于返回正则使用的修饰符名称

//5. .表示匹配所有，除了终止符，比如回车\n换行\n等等，使用s修饰符匹配
// let text = 'x\nyz';
// patt = /x.+yz/s;
// console.log(patt.test((text)));//true

//6.es6支持修饰符替换，之前这种写法会报错
// let regex = new RegExp(/xyz/iu,'g');
// console.log(regex.flags);//iu 增加了g，返回g会替代前面的



