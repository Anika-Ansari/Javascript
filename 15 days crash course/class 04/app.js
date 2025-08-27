//Functions
//alert,parseInt = built in function
//greet = custom function
// function greet (studentsName){ //Parameter
// console.log("hello " + studentsName)
// }
// greet("Nadir");//Argument
// greet("ikhlas");
// greet("Ameen");

function employee(fileNo) {
     return "working on file no " + fileNo;
}
employee(7);
employee(9);



function employee(fileNo) {
     return "Working on file no " + fileNo;
}

// function ko call karte waqt result ko print karna:
console.log(employee(7));  
console.log(employee(9));

// ek aur example
console.log(employee(15));
console.log(employee(21));
