console.log(`-------Vote Eligibility-----`);
function voteEligibility(age) {
   if(age==0 || age>=120||age==null||age==undefined) {
    console.log(`In valid data of age =${age} `);
   }
else if(age<=18){
    console.log(`Age ${age}: you are not eligible for vote`);

}else{
    console.log(`Age ${age}: you are  eligible for vote`); 
}

}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(undefined);
voteEligibility(null);