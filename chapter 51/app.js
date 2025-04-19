// var lessText = "";
// function abc() {
//     var text = document.getElementById("text");
//     var fullText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic soluta reprehenderit corrupti sunt earum odit quaerat delectus vel officia accusamus quisquam deserunt magnam perspiciatis dolor accusantium veritatis quod,nisi aliquid"
//     var btn = document.getElementById("btn");
//     if (lessText) {
//         text.innerHTML = lessText;
//         btn.innerHTML = "see more";
//         lessText = ""
//     } else {
//         lessText = text.innerHTML
//         text.innerHTML = fullText
//         btn.innerHTML = "see less"
//     }
//     console.log(text.innerHTML);
// }

/////////////image ka kam

//image ko zoom krna

// function makeBig(){
//     var image = document.getElementById("car");
//     image.className = "big-car"
//     console.log(image);
// }
// var zoom = false;
// function zoomImage(){
//     var image = document.getElementById("car");
//     if (zoom ){
//         image.className = "Car";
//         zoom = false
//     }else{
//         image.className += "zoom-car";
//         zoom =true;
//     }
// }

//  sary tag ka color change krna......

 function abc(){
//     //var main =document.getElementById("main")
//     //console.log(p);
    var p =document.getElementsByTagName("p");
    for (var i =0; i<p.length ; i++){
        p[i].style.color ="red";
    }
}

