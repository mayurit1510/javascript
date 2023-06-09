


console.log(`1.Arrow function with no arguments and no return value`);
let display = ()=> {
    console.log(`Good Morning , Today is Monday`);
}
display();

console.log(`2.Arrow function with 3 arguments and no return value`);
let multiplication = (num1, num2,num3=1) => {
    let result = num1 * num2 * num3;
    console.log(`Result is ${result}`);
}

 multiplication(5,5,2);

 multiplication(5,5);


console.log(`Arrow function with arguments and return value`);
let add = (num1, num2,num3,num4) => {
    let result = num1 + num2+ num3+num4;
    return result;
    
}
 let result1=add(100,100, 200,349,756);
 console.log(`3.a) Result is ${result1}`);
 
 let result=add("I am "," learning "," ES6 "," features "," in depth ");
 console.log(`3.c)Result is ${result}`);

