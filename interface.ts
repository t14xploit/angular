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


let users: User[] = [
    {name:"John", id:1, email:"john@gmail.com"},
    {name:"Jill", id:2, email:"jill@gmail.com"},
    {name:"Jane", id:3, email:"jane@gmail.com"}
];

//redestructuring
let [user1, user2, ...restUsers]: User[] = [
    {name:"John", id:1, email:"john@gmail.com"},
    {name:"Jill", id:2, email:"jill@gmail.com"},
    {name:"Jane", id:3, email:"jane@gmail.com"},
    {name:"Jack", id:4, email:"jack@gmail.com"},
    {name:"Jenny", id:5, email:"jenny@gmail.com"}
];
console.log(user1);
console.log(user2);
console.log(restUsers);



let result = restUsers.filter(user => user.id > 3);
console.log(result);