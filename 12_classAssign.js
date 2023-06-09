
class Vehicel{
    constructor(name, price, model,fueltype,color){
        this.name = name;
        this.price = price;
        this.model = model;
        this.fueltype = fueltype;
        this.color=color;  
       
         
}
 
showDetails(){
    console.log(`Details of Vehicel object properties: { ${this.name}, ${this.price}, ${this.model}, ${this.fueltype} ,${this.color}}`);
}  

}
const swift = new Vehicel('Swift', '7 lac', 'desire', 'Petrol','red');
const fassion = new Vehicel("Fassion","65","Honda","Petrol","blue");
const hero = new Vehicel("Hero","85","pleasure","Petrol","black");
const ennova = new Vehicel("Ennova","11 lac","top","disel","white");
const wagnor= new Vehicel("Wagnor","5 lac","vxi","Petrol","Gray");

let array=[swift,fassion,hero,ennova,wagnor];
//
//for (const Vehicel of array) {
 //   showDetails(array);
//}
//const result = swift instanceof Vehicel;
//console.log(result);
swift.showDetails();
fassion.showDetails();
hero.showDetails();
ennova.showDetails();
wagnor.showDetails();

class College{
    nameOfClg
    location
    department
    medium

    constructor(nameOfClg, location, department,medium){
        this.nameOfClg =nameOfClg;
        this.location=location;
        this.department=department;
        this.medium= medium;
          
       
         
}
 
showDetails(){
 console.log(`Name : ${this.nameOfClg}`);
 console.log(`location: ${this.location}`);
 console.log(`Departmets:${this.department} `);
 console.log(`Medium : ${this.medium}`);
    //console.log(`Details of college properties: { ${this.nameOfClg}, ${this.location}, ${this.department}, ${this.department}}`);
} 

 

}
let jspm= new College('JSPM', 'Pune', 7,'English' );
let sspm=new College('SSPM', 'Sawantwadi', 6,'Semi' );
let spk=new College('SPK', 'Kankavli', 9, 'English');
let srm=new College('SRM', 'Kudal', 5, 'Marathi');
console.log("---college information----");
jspm.showDetails();
console.log("");
spk.showDetails();
console.log("");
sspm.showDetails();
console.log("");
srm.showDetails();







