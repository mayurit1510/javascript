
class Vehical{
    constructor(name, price, model,fueltype,color){
        this.name = name;
        this.price = price;
        this.model = model;
        this.fueltype = fueltype;
        this.color=color;      
}
showDetails(){
    console.log(`Details is ${this.name}, ${this.price}, ${this.model}, ${this.fueltype} ,${this,this.color}`);
}
}
const swift = new Vehical("Swift","7 lac","desire","Petrol","red");
const array=[swift];
for (const vehical of array) {
   showDetails();
}
