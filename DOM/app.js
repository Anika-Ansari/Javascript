// function abc(){

// }
// console.log(document.childNodes[1].childNodes[2].nodeType);

// var p = document.getElementById("para");


// console.log(p.hasAttribute("class"));  dekh kr btata hai elemnt k pas ye attribute hai ya nhi

// console.log(p.getAttribute("class")); 

// p.setAttribute("class","test");

//console.log(p.attributes[0])

var main =document.getElementById("main")

var div = document.createElement("div");
var p = document.createElement("p");
var text = document.createTextNode("Ghous Ahmed");

div.setAttribute("class","container");
p.appendChild(text)

div.appendChild(p)


main.appendChild(div)
console.log(div);
// console.log(p)
// console.log(text)



 