

var greaterNumber=function (num1,num2) {
    var result=num1>=num2? `${num1} is greater`: `${num2} is greater`
    console.log(`Given number are ${num1},${num2}`);
    console.log(` ${result}`);

    
}
greaterNumber(10,-10);
greaterNumber(800,899);

var isEvenOrOddNum=function (num) {
    num%2==0?true:false;
    return result;
  
}
var result=isEvenOrOddNum(29);
var res=result==true?"29 is even number":"29 is odd number";
console.log(`Given number are 29,44,0,101`);
console.log(res);
var result=isEvenOrOddNum(44);
var res=result==true?"44 is even number":"44 is odd number";
console.log(res);
var result=isEvenOrOddNum(0);
var res=result==true?"0 is even number":"0 is odd number";
console.log(res);var result=isEvenOrOddNum(101);
var res=result==true?"101 is even number":"101 is odd number";
console.log(res);


var wordlenght=function (word) {
    var len=word.wordlenght;
    var result=len%2==0?"Even":"odd";
    return result;   
}
var result=wordlenght("JavaScript");
var res=result==true?`Javascript has wordlenght is ${result} number`:`Javascript has wordlenght is ${result} number`;
console.log(res);

var result=wordlenght("developer");
var res=result==true?`developer has wordlenght is ${result} number`:`developer has wordlenght is ${result} number`;
console.log(res);
var result=wordlenght("Google");
var res=result==true?`Google has wordlenght is ${result} number`:`Google has wordlenght is ${result} number`;
console.log(res);
