import { IPerson } from "./IPerson";
export class Person5 implements IPerson{
    name:string = ''
    constructor(name:string){
        this.name = name
    }
    run(){
        console.log(this.name +'运行了');
        
    }
}