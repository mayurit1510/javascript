
console.log(`Assignment 02`);
 var greet="  Hey you are doing good, keep it up  ";
console.log(`1. Given a String : "Hey you are doing good ,keep it up"`);
console.log(`2. Calcute lenght of the String ${greet.length}`);
var extraTrim= greet.trim();

var cout=greet.length;
var extralenght= cout-extraTrim.length;
console.log(`After remove leading and trailing extra space length is :${extralenght} `);

var charAtZero= greet.charAt(2);

var charAtLast= greet.charAt(35);

console.log(`First and last character : ${charAtZero} ${charAtLast}`);

console.log();