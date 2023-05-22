
console.log(`string to number`);
var result=Number(`324`);
console.log(result);//324

var result=Number(`324e-1`);
console.log(result);//32.4

console.log(`boolean to number`);
var result=Number(true);
console.log(result);//1

var result=Number(false);
console.log(result);//0

var result=Number(`hello`);
console.log(result);//NaN

var result=Number(undefined);
console.log(result);//NaN

var result=Number(NaN);
console.log(result);//NaN

