

var greet="Good Morning";
var includeResult=greet.includes("ing")
console.log("Is ing string available inside : ",includeResult);

var searchResult= greet.search("Mor");
console.log("Search result:",searchResult);

var sliceResult= greet.slice(4,6);
console.log("Slice result is:",sliceResult);

var subStringResult=greet.substring(4,6);
console.log("Substring result is:",subStringResult);

var greet="Good Morning mate,How are you";
var resultSplite=greet.split(" ");
console.log(resultSplite);
console.log("Total number of words:",resultSplite.length);


var resultSplite=greet.split(",");
console.log(resultSplite);
console.log("Total number of words:",resultSplite.length);

 