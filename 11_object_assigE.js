
let sbiBank={
    bankName:"State Bank of India",
    location:"Hadpsar",
    accountNo:1324455566,
    ifsc:'SBIN0071209',
    interestRate:6.50
}
let axisBank={
    bankName:"AXIS BANK",
    location:"Pune",
    accountNo:167624455566,
    ifsc:'UTIB0000037',
    interestRate:6
}
let hdfcBank={
    bankName:"HDFC Bank",
    location:"Kalyani Nagar",
    accountNo:178824455566,
    ifsc:'HDFC0000539',
    interestRate:6.3
}
let yesBank={
    bankName:"Yes Bank",
    location:"Pune",
    accountNo:455324455566,
    ifsc:'YESB0000001',
    interestRate:6.1
}
details:function show() {
   console.log("Bank Details:",sbiBank);
   console.log("Bank Details:",axisBank);
   console.log("Bank Details:",yesBank);
   console.log("Bank Details:",hdfcBank);
  }
  show();