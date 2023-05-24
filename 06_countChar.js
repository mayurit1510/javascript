var str1="I AM Learning JavaScript,The language of internet";
var str2="My favourite movie is LAggAn";


function countCharA(str) {
    for (let index = 0; index <=str.length; index++) {
    var char =str.charAt(index);
    var result="";
    if (char=="a" ||char=="A") {
        result=result+char;
       console.log(result); 
    }
}
    
}
countCharA(str1);
countCharA(str2);