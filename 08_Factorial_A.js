

function factorialOfNum(num) {
    if(num==0){
        console.log(`Factorial of zero is 1`);
        
    }else
    if(num==null|| num==undefined){
        console.log(`Invalid data = ${num}`);
    }
    else{
    let fact=1;
    for (let index = num; index >=1; index--) {
        fact=fact*index;
        
    }
    console.log(`factorial of ${num} is ${fact}`);
   
}
}
factorialOfNum(5);
factorialOfNum(3);
factorialOfNum(null);
factorialOfNum(8);
factorialOfNum(undefined);
factorialOfNum(9);
factorialOfNum(0);
