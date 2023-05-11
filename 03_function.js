
function show() {
    console.log("show function");
    
}
console.log("before function call");
show();
console.log("after function");


var num1=100;
var num2=200;

function swapVariables(value1,value2) { //arguments
    
console.log("Before Swap:",value1,value2);
var temp=value1;
value1=value2;
value2=temp;
console.log("After Swap",value1,value2);
   
}
swapVariables(num1,num2);//100,200
