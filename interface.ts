export interface User {
    name:string;
    age?:number;
    id:number;
    email:string;
}

let {name: userName, email}:User = {
    name:"John",
    id:1,
    email:"john@gmail.com"
};


// user.name;
// user.email;


// userName;



interface Employees extends User {
    salary:number;
    department:string;
}

let employee:Employees = {
    name:"John",
    id:1,
    email:"john@gmail.com",
    salary:1000,
    department:"IT"
};


//method definition
export interface Login{
    login():User;
}