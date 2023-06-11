
const arraynum=[1,-7,40,502,-77,91,0,108,89,-601];
console.log(`1.The arra elements with its index`);

arraynum.forEach((element,index)=>{
  console.log(`index=${index} element=${element}`);
});
console.log(`2.The positive numbers in array= `);
arraynum.forEach((element)=>{
    if (element>=0) {
        console.log(element); 
    }
    
  });
  console.log(`3. The negative numbers add into new array and log new array`);
  const arrayNegative=[];
  arraynum.forEach((element)=>{
    if (element<=0) {
        arrayNegative.push(element);
    }
    
  });
  arrayNegative.forEach((element)=>{
  console.log(element);
  });

  console.log(`4.The even numbers `);
  arraynum.forEach((element)=>{
    if (element%2==0) {
        console.log(element); 
    }
    
  });

  console.log(`5.The sum of all elements  from arraynum `);
  let sumelement=0;
  arraynum.forEach((element)=>{
    sumelement=sumelement+element;
    
  });
  console.log(sumelement);

  console.log(`6.The only even indexed array value`);
  arraynum.forEach((element,index)=>{
    if (index%2==0) {
        console.log(index,element); 
    }
    
  });

