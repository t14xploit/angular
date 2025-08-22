// function add(a:number, b:number){
//      a+b; (no return word)
// } returns void

function add(a:number, b:number, x?:number):number{
    return x? a+b+x:a+b;
}

//normal func 


let sum = add(10,20);
console.log(sum);

const substract = (a:number, b:number):number => a-b;

//arrow func

let diff = substract(10,20);
console.log(diff);

const multiply = function(a:number, b:number):number{
    return a*b;
}
//anonymous func; func expression

let product = multiply(10,20);
console.log(product);