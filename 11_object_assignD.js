
let professor={
    name:'Anjali',
    age:45,
    education:'phd',
    city:"pune",
    subject:'Computer Science',

    degree:{
        engineering:'CSC',
        phd:'Adv Computing',
        grade:'A+',
   },
   certificates:["Hacker Rank","Certificate in IFE course","Certificate in Adv Programming"],
    degrees:function() {
        let detail=professor.degree;
        return detail;
},
}
//let professorPro=`N`
console.log("Properties of  professor:",professor);
console.log("Properties of  nested object 'degree':",professor.degree);
console.log("Properties of array object:",professor.certificates);
console.log(`-----Teachers total degres are----`);
console.log(professor.degrees());
//professor.degrees();
professor.totalExperience="14 years";
console.log("Total experience is:",professor.totalExperience);
console.log(`------- Updating object properties----------`);
professor.city = "Mumbai";
console.log(professor);
professor.certificates[3]="Oracle Certified";
console.log(professor.certificates);
console.log("Last element of certificate array is:",professor.certificates[3]);