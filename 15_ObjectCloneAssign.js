


const arrayNums = [20,3,4,56,90,400,49 ];
console.log("Cloned Array before update",arrayNums);
 const clonedArray = arrayNums; // Shallow clone
 clonedArray.push(55,66);

console.log("Cloned Array after update:",clonedArray);
clonedArray.push(10,25)

const array4 = [...arrayNums];
console.log("Arraynum after update 10,25",array4);

console.log("Cloned Array after update 10,25",clonedArray);


const arrayNums1 = [ 20, 3, 4, 56, 90, 400, 49  ]
//const newArray = arrayNums;