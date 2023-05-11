
function show() {
    console.log("show function");
    
}
console.log("before function call");
show();
console.log("after function");


var num1=100;
var num2=200;
function swapVariables(value1,value2) { //arguments
    console.log(value1,value2);
   // var value1=100
   // var value2=200
}
swapVariables(num1,num2);//100,200
