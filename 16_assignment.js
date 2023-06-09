
console.log(`Remove duplicate elements from array`);
const arraynum=[11,3,4,11,4,7,3];

  const setOfNum=new Set();
  for (const element of arraynum) {
   setOfNum.add(element);
  } 
  console.log(setOfNum); 
  
  const str="How are you mate";
  let newChar="";
  const arrayWords=str.split(" ");
  for (const element of arrayWords) {
   for (let index = 0; index < element.length; index++) {
      let char=" "
      if(index==0 || index==element.length-1){
         char= element[index].toUpperCase();

      }else{
         char=element[index];
      }
      newChar=newChar + char;

   }
   newChar=newChar+" ";
  }
  console.log(str);
console.log(newChar);