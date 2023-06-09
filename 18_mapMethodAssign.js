
console.log(`1.Add 10 into each element and log new array`);
const arraynum=[20,11,40,25,23,11,9,31,60,2,19];
const arraynumber=arraynum.map((element)=>{
   return element+10;
});
console.log(arraynumber);
console.log(`2.Squre the each array elements`);
const arraynumber1=arraynum.map((element)=>{
    return element*element;
 });
 console.log(arraynumber1);
 console.log(`3.Add the index value into its corresponding each array elements`);
 const arraynumber3=arraynum.map((element,index)=>{
    return element+index;
 });
 console.log(arraynumber3);