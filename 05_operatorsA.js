
function squareOfWordLength(string) {
    
    console.log(`The length of word is ${string.length} return its length square is:${string.length*string.length}"`);
    console.log();
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");

function angular() {
    var string="I am Angular Developer";
    console.log(`The string length is : ${string.length} and divided by total number words available in that string ${string.split(" ").length} is: ${string.length/string.split(" ").length}`);
    console.log(`The string length is : ${string.length} and divided by total number words available in that string ${string.split(" ").length} is: ${string.length*string.split(" ").length}`);
}angular();
