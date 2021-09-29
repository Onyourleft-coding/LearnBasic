(
    function(){
        // 泛型的约束
        interface Ilength{
            length:number

        }
        function info<T extends Ilength>(msg:T):T{
            console.log(msg.length);//报错，有些数据没有length
            
            return msg
        }
        console.log(info<string>('Mr.lin'));
        class Person<T,P>{
            _name:T
            _age:P
            constructor(_name:T,_age:P){
                this._name = _name
                this._age = _age
            }
            get name():T{
                return this._name
            }
            get age():P{
                return this._age
            }
        }
        let p = new Person('Mr.lin',100)
        console.log(p.name);
        console.log(p.age);
        
        
    }
)()