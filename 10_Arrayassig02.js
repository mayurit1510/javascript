
var arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log(arrayNumbers);
let lenghtOfArray=arrayNumbers.length;
const zerothIndexValue=arrayNumbers[0];
console.log(`1.First element in Array= ${zerothIndexValue}`);

const lastIndexValue=arrayNumbers[lenghtOfArray-1];
console.log(`2.Last element in Array= ${lastIndexValue}`);

const thirstIndexValue=arrayNumbers[lenghtOfArray-3];
console.log(`3.Last element in Array= ${thirstIndexValue}`);
console.log(`4.The all even numbers are: `);
for (const element of arrayNumbers) {
   //console.log(element); 
   if(element%2==0){
    console.log(element);
    //console.log(arrayNumbers);

   }  
}
console.log(`5.The all Odd numbers are: `);
for (const element of arrayNumbers) {
   //console.log(element); 
   if(element%2==1){
    console.log(element);

   }
   
}
console.log(`6.The all even position numbers are: `);
let resul=0;
for (const index in arrayNumbers) {
   //console.log(element); 
   if(index%2==0){
    const element=arrayNumbers[index];
    console.log(element);
    resul+=arrayNumbers[index];

   }
   
}console.log("sum is",+resul);
console.log(`7.The all odd position numbers are: `);
let result=0;
for (const index in arrayNumbers) {
   //console.log(element); 
    
   if(index%2==1){
    const element=arrayNumbers[index];
    console.log(element);
    result+=arrayNumbers[index];
    
   } 
}console.log("sum is",+result);
console.log(`8.The sum of all elements from arrayNumbers are: `);
let sum=0;
for (let index = 0; index < arrayNumbers.length; index++) {
   const element = arrayNumbers[index];
   sum+=arrayNumbers[index];
   //console.log(element);
}

   //sum+=arrayNumbers[index];
   //

console.log("sum is",+sum);

console.log(`9.The numbers which are multiple of 5`);
for (const element of arrayNumbers) {
   //console.log(element); 
   if(element%5==0){
    console.log(element);

   }
   
}
console.log(`10.The numbers 115 available in arrayNumbers`);
//for (const element of arrayNumbers) {
  let output= arrayNumbers.includes(115);
   console.log(output); 
   //if(element==115){
    //console.log(`Element  found in array 115`);

   //}else{
      //console.log(`Element not found in array 115`);
  // }
   
//}
console.log(`11.The numbers 23 available in arrayNumbers`);
let out= arrayNumbers.includes(23);
   console.log(out);
/*for (const element of arrayNumbers) {
   //console.log(element); 
   if(element==23){
    console.log(element);

   }else{
      console.log("not found");
   }
   
}*/
console.log(`12.Insert numbers--55,66 before index 3`);
let array=arrayNumbers.splice(3,0,55,66);
console.log(arrayNumbers);
console.log(`13.Delete 3 elements starting from index 4`);
let deleteElements=arrayNumbers.splice(4,3);
console.log(arrayNumbers);


