

var tcsEligibility=function(gradScore,hscScore,sscScore,candidateName){
    var result=gradScore>=70||hscScore>=80||sscScore>=90?`Congrates ${candidateName} you are eligible for TCS interview`:`Unfortunately ${candidateName} you are not eligible for TCS interview`;
   console.log(result);
   }
   tcsEligibility(80,86,90,"Mayuri");
   tcsEligibility(70,65,55,"Akshta");
   tcsEligibility(60,79,88,"Bhgyashri");
