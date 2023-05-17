var num1; 
function square(num1) {
    var result=num1*num1;
    console.log(`1.Square of the number ${num1} is:${result}`);
    
}
square(5);
square(6);
square(25);
square(100);

console.log(`2.Type of squre()  is :${typeof square}`);

function areaOfPlot(lenght,width){
    var areaOfRectangle=lenght*width;
    console.log(`3.The area of rectangle plot is: ${areaOfRectangle}`);

} 
areaOfPlot(499,917);
var swapValue= function(a,b) {
    
}

    function stringHandson(){
    var string="JS the most popular language of internet"
    console.log(`A. The total character available in string :${string.length}`);
    // var result=string.charAt(6);
    console.log(`B.The character at index 6 is:${string.charAt(6)}`);
    console.log(`C. The character at index 11 is:${string.charAt(11)}`);
    console.log(`D.The last character from the given string is:${string.charAt(string.length-1)}`);
    console.log(`E.The first character from  the given string is :${string.charAt(0)}`);
    
    var num=string.split(" ").length;
    var result=num*num;
    console.log(`F.The total number words of the given string ${num} and calculate the square of it:${result}`);
}stringHandson();
 


