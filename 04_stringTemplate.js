

console.log(`Assignment 01`);
 var greet="  Hey you are doing good, keep it up  ";
console.log(`1. Given a String : "Hey you are doing good ,keep it up"`);
console.log(`2. Calcute lenght of the String ${greet.length}`);
var extraTrim= greet.trim();
console.log(`3.Remove the leading and trailing extra spaces is "${extraTrim}" and lenght ${extraTrim.length}`);


var cout=greet.length;
var extralenght= cout-extraTrim.length;
console.log(`4.The total number extra spaces count that is removed in step3 is :${extralenght} `);


var charAtZero= greet.charAt(2);

var charAtLast= greet.charAt(35);

console.log(`5.First and last character : ${charAtZero} ${charAtLast}`);



console.log(`6.The count of total words available in the string after step 3: ${extraTrim.length}`);
var word=greet.indexOf("good");
console.log(`7.The index of word "good ": ${word}`);
var subString=greet.substring(22);
var number =greet.slice(22);
console.log(`8.The substring starting from index 22 using substring():${subString} ,using slice(): ${number}`);
var end=greet.includes("up");
console.log(`Is string end with word "up" ${end}`);
var start=greet.includes("Hey");
console.log(`Is string end with word "Hey" ${start}`);



