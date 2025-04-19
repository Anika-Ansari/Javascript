
//each letter ko capitilize krna

// var str = "lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quidem voluptates. Porro harum cupiditate alias enim error repellendus facilis modi soluta dolorem similique nobis maxime officia, iusto possimus consectetur esse."
// // var result = str[0] .toUpperCase() +str.slice(1);
// // console.log(result)

// var words = str.split(" ")
// var arr =[]

// for (var i=0;  i <words.length; i++){
//  var result = words[i][0] .toUpperCase() +words[i].slice(1);
//  arr.push(result)
// }
// console.log(arr.join(" "));

// var str = "anika asif jameel ansari asif "
// var str = str.replaceAll("asif" ,"smit")
// console.log(str)


// var str ="anika ansari"

// console.log(str.charAt)


// var p1 = prompt("enter name of player 1");
// var p2 = prompt("enter name of player 2");
// var p1= prompt("player 1 which you choose head or tail")


// var random = Math.random() * 2;
// var round =Math.round(random)
// alert(round)


// head = 1
// tail =0
// if (p1 == 1)
//     alert("p1"  + "you win")
// else (p1 == 0)
// alert("p1" + "you lost")


// var arr = [1, 2, 3, 4, 5, 98, 23, 45, 67, 90, 45, 67, 88, 0];

// for (var i = 0; i < arr.length; i++){
//     if (arr.length>=arr){
//         console.log([i])
//     }
// else{
//     console.log(wrong)
// }
// }

var arr = [1, 2, 3, 4, 5, 98, 23, 45, 67, 90, 45, 67, 88, 0];

var largest = arr[0]; // Assume first element is largest

for (var i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i]; // Update largest if current element is greater
    }
}

console.log("The largest number is:", largest);


var arr = [45, 67, 2, 90, 5];

var smallest = arr[0];

for (var i=0; i<arr.length; i++){
    if (arr[i]<smallest ){
      smallest= arr[i]
    }
}
console.log("the smallest number is ",smallest)