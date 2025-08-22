//string
let lastName:string;
lastName="john";

let newName = lastName.toUpperCase();
console.log(newName);

//num 
let age:number=25;
let stringAge = "20";
let result = parseInt(stringAge);
console.log(result);

//boolean
let isValid:boolean;

// console.log(isValid); Variable 'isValid' is used before being assigned.ts(2454)
isValid = true;
console.log(isValid);


let empList :string[] = [];
empList.push("john");
empList.push("james");
empList.push("jim");
console.log(empList);


//ex 2. 
let numList : Array<number>;
numList = [1,2,3,4,5];
let results = numList.filter((num) => num>2);
console.log(results);

let sum = numList.reduce((acc,num) => acc + num);
console.log(sum);

//enum
const enum Color {
    Red,
    Green,
    Blue
}
let c:Color = Color.Blue;
console.log(c);

//tuple
let swapNums: [firstNumber: number, secondNumber: number];
function swapNumbers(num1: number, num2: number): [number, number] {
    return [num2, num1];
}
swapNums = swapNumbers(10, 20);
console.log(swapNums);


//any
let department:any;
department = "IT";
department = 10;

//void
function printHello():void{
    console.log("Hello");
}

//never
function error(message:string):never{
    throw new Error(message);
}