
 var str="I am very good IT Developer";
var count=0;
console.log("str=" ,str);
for (let index = 0; index <=str.length; index++) {
   var char =str.charAt(index);
 
   if(char=='a'||char=='e'|| char=='i'||char=='o'||char=='u'||char=='A'||char=='E'||char=='I'||char=='O'||char=='U'){
    //console.log(char);
    count++;
    }
    
}
console.log(`1.count total vowels:${count}`);


function sumOfCube(n) {
    let sum = 0;
    for (let index = 1; index <=n; index++) {
        
        //var sum = index*index*index;
        sum+=index**3;
        
        //console.log(sum);
            
    }
    return sum;
    //console.log(sum); 
}

console.log("2.Sum of cube of numbers from 1 to 5 =",sumOfCube(5));
var str1="Hard work always pays back";
var str2="Soon I will be Angulsr IT Champ"

function oddPositionedChars(str) {
    var result="";
    for (let index = 0; index < str.length; index++) {
        var char =str.charAt(index);
        
        if (index%2!=0 && char!=" ") {

           result=result+char;
           
        }
       
    }
    console.log( `3. Odd Positioned Chars= ${result}`);
    
}   
oddPositionedChars(str1) ; 
oddPositionedChars(str2) ; 
          
      