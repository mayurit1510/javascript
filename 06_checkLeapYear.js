
var checkLeapYear=function (year) {
    if (year==NaN || year==null||year==undefined) {
       console.log(`${year}: is not Leap year`); 
    }
    else 
    if(year%4==0){
        console.log(`${year} : is Leap year`);

    }else{
        console.log(`${year} : is not Leap year`);
    }
}
checkLeapYear(2020);
checkLeapYear(1999);
checkLeapYear(1945);
checkLeapYear(2022);
checkLeapYear(null);
checkLeapYear("Twenty Twenty");
checkLeapYear(undefined);
checkLeapYear(NaN);
checkLeapYear(1750);