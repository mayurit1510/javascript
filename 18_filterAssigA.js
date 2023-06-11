
const arraynumber=[20,11,40,25,37,49,9,90,60,2,19];
console.log(`The numbers which are greater than 50`);
const arrayGreaterThan50=arraynumber.filter((element)=>{
    return element>50;
});
console.log(arrayGreaterThan50);
console.log(`2.Find out all the even numbers in array`);
const arrayEvenNum=arraynumber.filter((element)=>{
    return element%2==0;
});
console.log(arrayEvenNum);
console.log(`3.Find out all the odd numbers in array`);
const arrayOddNum=arraynumber.filter((element)=>{
    return element%2==1;
});
console.log(arrayOddNum);
console.log(`4.Find out all the numbers which are multiple of 5`);
const arrayMulNum=arraynumber.filter((element)=>{
    return element%5==0;
});
console.log(arrayMulNum);
console.log(`5.Find out all numbers which are between 20 and 50`);
const arrayNum=arraynumber.filter((element)=>{
   // return element>=20;
    return element<=50 && element>=20;
});
console.log(arrayNum);
