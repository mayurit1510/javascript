
console.log("---1---");
function display() {
    console.log("Hellow world");
}
function show() {
    console.log("Javascript function with no argument");
    
}
display();
show();
console.log("----2---");
function personalDetails(firstName,lastName,collegeName) {
    console.log("My Personal Details is");
    console.log("My Name is:",firstName,lastName);
    console.log("My College Name is",collegeName);
    
}
personalDetails("Mayuri","Tandel","JSPM");

console.log("----3---");


function swapValuesDude(value1,value2) { //arguments
    
    console.log("Before Swap:",value1,value2);
    var temp=value1;
    value1=value2;
    value2=temp;
    console.log("After Swap",value1,value2);
       
    }
    swapValuesDude("Virat","Anushka");
    swapValuesDude(1000,2000);
    console.log("---4---");
    function addThreeValues(a,b,c) {
       var result= a+b+c;
       console.log(result);
        
    }
    addThreeValues(10.23,600,40);
    addThreeValues("hellow","Good" ,"Morning");