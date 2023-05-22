
console.log(`----Month---`);
function MonthOfYear(Num) {
    switch (Num) {
        case 1:
            console.log(`Month is ${Num}: "January"`);
            break;
        case 2:
            console.log(`Month is ${Num}: "February"`);
            break;
        case 3:
            console.log(`Month is ${Num}: "March"`);
            break;
         case 4:
            console.log(`Month is ${Num}: "April"`);
            break;
        case 5:
            console.log(`Month is ${Num}: "May"`);
            break;
        case 6:
            console.log(`Month is ${Num}: "June"`);
            break;
        case 7:
            console.log(`Month is ${Num}: "July"`);
            break;
        case 8:
            console.log(`Month is ${Num}: "August"`);
            break;
        case 9:
            console.log(`Month is ${Num}: "September"`);
            break;
        case 10:
            console.log(`Month is ${Num}: "October"`);
            break;
        case 11:
            console.log(`Month is ${Num}: "November"`);
            break;
        case 12:
            console.log(`Month is ${Num}: "December"`);
            break;
        default:
            console.log(`Invalid input ==> ${Num}`);
            break;
    }
}
MonthOfYear(0);
MonthOfYear(2);
MonthOfYear(5);
MonthOfYear(12);
MonthOfYear(15);
MonthOfYear(100);
MonthOfYear(null);
MonthOfYear(undefined);
