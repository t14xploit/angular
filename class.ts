class Employee{
   id:number; 

   name:string;

   address:string;

   //multiple contructors not allowed in typescript
   constructor(id:number, name:string, address:string){
        this.id = id;
        this.name = name;
        this.address = address;
    }
}

let john = new Employee(1, "John", "Highway 71");

// john.id = 1;
// john.name = "John";
// john.address = "Highway 71";

console.log(john);