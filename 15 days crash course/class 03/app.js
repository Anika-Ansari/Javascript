// let userFavNum = prompt("Enter your favorite number");

// console.log(+userFavNum + 5);

//Comparison Operators
//==, === 
//console.log(5 === "5");
//!=, !==
//console.log(5 !== 6);
//<,> , <=, >=
// let num1 = 6;
// let num2 = 6;
// console.log(num1 <= num2);
// let user1Age = 7;
// let user2Age =25;
// console.log(user2Age >=18);

// let userAge = +prompt("Enter your age");

// if (userAge >= 18){
//     console.log("you can apply for NIC")
// } else {
//     console.log("you are not eligible")
// }


// let userFavNum = +prompt("Enter a number");
// let computerNum = Math.round(Math.random()*10);

// if (userFavNum === computerNum){
//     console.log("You Won!");
// }else{
//     console.log("You Lose! " + computerNum );
// }


// let userInput = prompt("Even or Odd");
// let computerNum = Math.round(Math.random() * 10);

// if (computerNum % 2 === 0 && userInput === "even") {
//     console.log("You Won!" + computerNum);
// } else if (computerNum % 2 !== 0 && userInput === "odd")
//      { console.log("You Won!" + computerNum); }
// else {
//     console.log("You Lose! " + computerNum);
// }

// let userInput = prompt("Even or Odd");
// let computerNum = Math.round(Math.random() * 10);
// let isEven = computerNum % 2 === 0 ;
// if (isEven && userInput === "even") {
//     console.log("You Won!" + computerNum);
// } else if (!isEven && userInput === "odd")
//      { console.log("You Won!" + computerNum); }
// else {
//     console.log("You Lose! " + computerNum);
// }

//Initialization
// Condition 
//Increment

let table = 8
for (let i = 1; i <= 10; i++) {
    console.log( table + " X " + i  + " = " + table*i )
}