

let bankSbi={
    bankName:"State Bank of India",
    location:"Hadpsar",
    accountNo:1324455566,
    ifsc:'SBIN0071209',
    interestRate:6.50
}
let banklocation={
    street:"Magarpatta",
    city:"pune",
    pin:416345

}
let rateOfInterest={
    homeLoanInterest:4,
    personalLoanInterest:3,
    duelInterest:3.3
}
console.log("1.object bankSbi properties",bankSbi);
console.log("2.object banklocation properties",banklocation);
const detail=Object.assign(bankSbi, banklocation);
console.table(detail);
//console.log(banklocation);
const sbiDetail = Object.assign(bankSbi, banklocation, rateOfInterest);
console.table(sbiDetail);

console.log("--------- Traversing Sbi details -----------");
for (const key in sbiDetail) { // key = "height"
    if (Object.hasOwnProperty.call(sbiDetail, key)) {
        const value = sbiDetail[key];
        console.log(`${key}:${value}`);
    }
}