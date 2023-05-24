
var arrayFruits=["Banana","Orange","Apple","Mango","Water Meloan"];
console.log(arrayFruits);
let lenghtOfArray=arrayFruits.length;
const zerothIndexValue=arrayFruits[0];
console.log(`First element in Array= ${zerothIndexValue}`);

const lastIndexValue=arrayFruits[lenghtOfArray-1];
console.log(`Last element in Array= ${lastIndexValue}`);

arrayFruits.unshift("Papaya");

console.log(`2.Add Papaya before the element "Banana" = [${arrayFruits}]`);

arrayFruits.splice(4,1);
console.log(`3.Remove "Mango" from array= [${arrayFruits}]`);

arrayFruits.push("Pineaapple");
console.log(`4.Insert an element"Pineaapple" at the last position= [${arrayFruits}]`);

arrayFruits.splice(4,0,"Dragon Fruit");
console.log(`5.Insert an element -"Dragon Fruit"before "Water Melon"= [${arrayFruits}]`);
arrayFruits.splice(2,1,"Kiwi");
console.log(`6.Replace an element "Orange"with "KiWi"= [${arrayFruits}]`);

var add=arrayFruits.slice(1,4);
console.log(`7.log the last elements starting from index 1to 4= [${arrayFruits}]`);

var add=arrayFruits.splice(4,7);
console.log(`8.Select last 3 elements using lenght property= [${arrayFruits}]`);

