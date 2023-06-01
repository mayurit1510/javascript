var str1="I AM Learning JavaScript,The language of internet";
var str2="My favourite movie is LAggAn";


function countCharA(str) {
    var result="";
    for (let index = 0; index <=str.length; index++) {
    var char =str.charAt(index);

    if (char=="a" ||char=="A") {
        
      result=char+result;
      //console.log(`Total numbers of characters "a", "A is"`);
      //console.log(result);  
      
    }
   
} console.log(`Total numbers of characters "a", "A is" ${result}`);
 
}
countCharA(str1);
countCharA(str2);