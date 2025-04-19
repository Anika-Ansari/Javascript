
// for (var i= 0; i< 5 ; i++)
// {
//     console.log(i);

// }
// console.log("hello");



//var obj;
// setTimeout(function(){
//      obj = {name: "Anika",
//         email:" Anika@gmail.com"
//     }
// },2000)


// setTimeout(function(){
//     console.log(obj);
// },3000)

//console.log(obj);

// function abc(obj){
// console.log(obj);
// }

//callback*****

// function foo(callBack) {
//     setTimeout(function () {
//         obj = {
//             name: "Anika",
//             email: " Anika@gmail.com"
//         }
//         callBack(obj)
//     }, 2000)
// }

// function abc(data){
// console.log(data);
// }
// foo(abc);

////promise**********

// function abc() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             obj = {
//                 name: "Anika",
//                 email: " Anika@gmail.com"
//             }
//             reject("error agaya hai")
//         }, 3000)
//     })
// }
// abc()
//     .then(function (data) {
//         console.log("data", data);
//     })
//     .catch(function (err) {
//         console.log("error", err);
//     })


//fetch**************

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(function(data){
// return data.json()
// })
// .then(function(data){
//     console.log(data);
// })
// .catch (function(err){
//     console.log(err);

// })

// let ************

// let abc = "hello world"


// let abc = "smit"

// console.log(abc);

// function foo(){
//      let abc = "anika"
// }
// console.log(abc);
//  if (true){
//     var abc = "smit"
//  }
// console.log(abc);

// const data ="smit"

// data ="saylani"

// const data = ["Anika"]

// console.log(data);

// data.push ("Ansari")

// data = 8978

// console.log(data);

// var data = "smit"

// console.log( data);

// const data = "saylani"
// console.log(data);

//let firstName = `anika
// jameel`;
// let lastName = "Ansari";

// let fullName = `${firstName} ${lastName}`

// console.log(fullName);


//Rest paarmeter ***********

// function abc (a,...rest){
//     console.log(a,rest);

// }
// abc("anika","ansari",1234,"SMIT")

// function abc (){
//     console.log(arguments);

// }
// abc("anika","ansari",1234,"SMIT")

///spread operator*******

// let arr =[1,2,3,4,5];
// let arr1 =[6,7,8,9,10];

// let merge = [...arr,...arr1]

// console.log(merge);


//let obj ={
//firstName : "anika",
//     lastName : "ansari"
// }

// let student = {
//     ...obj,
//     email :"anikajameel@gmail.com"
// }

// let merge = {...obj,...student}

// console.log(merge);

// function updateArray(arr){
//     arr[1].name = "ahmed";
//     return arr
// }
// let obj = {name : "ghous"};
// let result = updateArray([obj,obj, obj]);

// console.log(obj);

// let obj = {name :"ghous",detail :{school :"smit"}};
// let obj1 = {...obj,detail:{...obj.detail}};

// obj1.detail.school= "saylani";

// console.log(obj);
// console.log(obj1);

//de structuring********

// let obj ={
//     firstName : "anika",
//     lastName : "ansari",
//     email : "abc@gmail.com",
//     detail :{
//         school : "smit"
//     }
// }

// let { firstName,lastName,email,detail} = obj;
// let{school} =detail;
// console.log(school);

//console.log(firstName,lastName,email);



// let arr = ["smit","saylani","it"]

// let [a,c,b] = arr;

// console.log(a,b,c);


// let arr =["ghous", 4567,"smit",true];

// arr.forEach(function(a,i){
// console.log(a,i);
// })

// for (var i= 0; i<arr.length ;i++ ){
//     console.log(arr[i]);

// }

//  map***********

// let arr =["ghous", 4567,"smit",true];

// let result = arr.map(function(v,i){
// console.log(v,i);
// return `${v} saylani`
// })

// console.log(result);

//filter **********

// let arr = ["ghous", 4567, "smit", true]

// let result = arr.filter(function (v, i) {
//     console.log(v, i);
//     return typeof v==="string"
// })

// console.log(result);

//some*******

//  arr = ["ghous", 4567, "smit", true]

//  let result =arr.some(function (v, i){
//     return v === 'sayalni'
//  })
//  console.log(result);
//every*******

//  arr = ["ghous", 4567, "smit", true]

//  let result =arr.every(function (v, i){
//     return v === 'sayalni'
//  })
//  console.log(result);


//sort *****

// let arr =[3,6,7,2,4,5,6,7,1]
// console.log(arr.sort());

// let arr = [{name :"ghous"},{name :"akram"},{name :"danish"}]
// arr.sort(function(a,b){
// let fa  = a.name.toLocaleLowerCase();
// fb = b.name.toLowerCase();

// if (fa < fb){
//     return -1;
// }
// if(fb >fa){
//     return 1;}
//     return 0;
// })
// console.log(arr);

//reduce *****

// var arr =[1,2,3,4,5]
// let result = arr.reduce(function(a,b){
//    return a >b ? a :b;

// })
// console.log(result);

// //function +++++++=

// function abc() {
//     console.log("test");

// }
// abc()

// var foo = function () {
//     console.log("hello");

// }
// foo()

// let foo = a => a +10

// function foo(a){
//     return a + b
// }

// console.log(foo(10))

// function foo(){
//     console.log("test")
// }

// foo.apply()
// foo.call()


// let foo =() => console.log("abcd")

// foo()


// let obj = {
//     name: "ghous",
//     getName: function () {
//         console.log(this);
//     }
// }
// let abc = obj.getName;
// obj.getName()
// abc()

// function fooo() {
//     console.log(this)
// }
// fooo();

// class School {
//     constructor (schoolName){
//         this.schoolName = schoolName;
//     }
// }

// class Student extends School{
//     constructor(schoolName,name, email) {
//         super(schoolName);
//         this.name = name;
//         this.email = email;
//     }
// }
// let student = new Student("saylani","Ghous Ahmed", "abc@gmail.com");

// console.log(student);

//class Car {
// #name;
// constructor(name){
//     this.#name = name;
// }
//     getCarName(){
//         return this.#name
//     }
// }

// let car = new Car ("Mehran")
// console.log(car.getCarName());

