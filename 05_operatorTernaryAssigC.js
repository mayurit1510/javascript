console.log(`step1`);

var maleMarriageEligibility=function(gender,age,boyName){
 var result=age>=21?`Hey ${boyName} you are eligible for Marriage`:`Sorry ${boyName} you are not eligible for Marriage`;
console.log(result);
}
maleMarriageEligibility("Male",25,"Billgates");
maleMarriageEligibility("Male",17,"Stew Jobs");
console.log(`step2`);

var femaleMarriageEligibility=function(gender,age,girlName){
    var result=age>=18?`Hey ${girlName} you are eligible for Marriage`:`Sorry ${girlName} you are not eligible for Marriage`;
   console.log(result);
   }
   femaleMarriageEligibility("Female",16,"Jenifer");
   femaleMarriageEligibility("Female",27,"Malinda Gates");
