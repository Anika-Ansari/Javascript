// var student ={
//     name :"Anika",
//     Roll : 123456,
//     class : "SMIT"
// }
// console.log(student)

// var cars = [{
//     name: "Civic",
//     model: 2023,
//     company: "honda",
//     availableColors: ['black', 'white', 'grey'],
//     price: 100_00_00_0,
//     auto: true,
//     moreDetail: {
//         doors: 4
//     },
//     getDetails: function () {
//         return `${this.name} ${this.model} ${this.price}`
//     }
// }, {
//     name: "Alto",
//     model: 2010,
//     company: "honda",
//     availableColors: ['black', 'white', 'grey'],
//     price: 5000000,
//     auto: true,
//     moreDetail: {
//         doors: 4
//     },
//     getDetails: function () {
//         return `${this.name} ${this.model} ${this.price}`
//     }
// }
// ]
// var carDetail = cars[1].getDetails();
// console.log(carDetail);
// delete (car.model)
// delete (car.moreDetail.wheel)
// delete (car.availableColors[0])
// console.log(car)

// console.log ("model" in car)
// car.moreDetail.wheel=4
// console.log(car.moreDetail.wheel);


// console.log(car.price);
//  console.log(car.availableColors[1])

//Objects constructor*****

//object ki copy bna kr dyna
//hum first waly ka name capital rakh dain gay jis se ye constructor function lgy ga

// function Car(name, model, price) {
//     this.name = name;
//     this.model = model;
//     this.price = price;
// }

// var cars = [
//     new Car("Civic", 2023, 232323),
//     new Car("Alto", 2023, 232323),
//     new Car("Mehran", 2023, 232323)
// ]// constructor function se kuch return krwane k liye new ka keyword use krty hain
// console.log(cars[2].name)

//10 prpoerties bnani hai 
//total car =30


// var cars = {
//     honda: {
//         civic: {
//             model_2010: {
//                 name: "Civic 2010",
//                 company: "Honda",
//                 colors: ["red", "blue", "pink"]
//             }
//         }
//     }
// }

// for (var key in cars) {
//     for (var key1 in cars[key]) {
//         console.log(cars[key][key1]);
//     }
// } 

// function Student (firstName,lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
// //prototype;;;
// Student.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`
// }

// var student = new Student("Ghous", "Ahmed");

// console.log(student.hasOwnProperty("firstName"));


// console.log(Object.values(student))
// console.log(Object.entries(student))
// console.log(Object.keys(student))
// for (var key in student){
//     console.log(student[key]);

// }

// console.log(student.getFullName());

//dropdowm bnana**********

//function submit() {

        //var dropdown = document.getElementById("dropdown");
    //console.log(dropdown.value);

//     var gender = document.getElementsByName("gender");
//     for(var i = 0; i < gender.length; i++) {
//         if(gender[i].checked) {
//             console.log(gender[i].value)
//         }
//     }

//temporary image nazar aay gi

// var file = document.getElementById("file");
// var image =document.getElementById("image");
// image.src =URL.createObjectURL(file.files[0]);
//}

// function fileSubmit(){
// var file = document.getElementById("file");
// var image =document.getElementById("image");
// image.src =URL.createObjectURL(file.files[0]);

// //window.location.href = "home.html"

// //location.href = "home.html"

// //window.open  = "home.html"

// }


// var heading  =document.getElementById("heading");
// var obj = {name : "Anika"}
// heading.innerHTML = obj.name

// localStorage.setItem("student",JSON.stringify({name :"anika"}))

// localStorage.getItem("student")

// JSON.parse(localStorage.getItem("student"));



