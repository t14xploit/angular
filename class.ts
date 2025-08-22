import * as UserLogin from './interface';

class Employee implements UserLogin.Login{
   #id:number; 

   name:string;

   address:string;

   //multiple contructors not allowed in typescript
   constructor(id:number, name:string, address:string){
        this.#id = id;
        this.name = name;
        this.address = address;
    }

    getNameWithAddress():string {
        return `${this.name} stays at ${this.address}`;
    }
    login(): UserLogin.User {
        return {name:"John", id:1, email:"john@jmail.com" , };
    }
}

let john = new Employee(1, "John", "Highway 71");

// john.id = 1;
// john.name = "John";
// john.address = "Highway 71";

console.log(john);

