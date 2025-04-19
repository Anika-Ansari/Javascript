var main = document.getElementById("main");
var searchInput = document.getElementById("searchInput");
var searchBtn =document.getElementById("searchBtn");
let Mobiles = [
    {
        images: "./images/img 1.jpg",
        modelName: "Galaxy S24 ultra",
        price: 45000,
    },
    {
        images: "./images/img 2.jpg",
        modelName: "Samsung Galaxy Z Fold 5	",
        price: 656999,
    },
    {
        images: "./images/img 3.jpg",
        modelName: "Samsung Galaxy A16 5G",
        price: 69999,
    },
    {
        images: "./images/r1.jpg",
        modelName: "Samsung Galaxy A56",
        price: 145999,
    },
    {
        images: "./images/img 4.jpg",
        modelName: "Realme GT 6",
        price: 149999,
    },
    {
        images: "./images/r2.jpg",
        modelName: "Realme 8 pro",
        price: 47999,
    },
    {
        images: "./images/r3.jpg",
        modelName: " Realme C33 128GB",
        price: 56000,
    },
    {
        images: "./images/r4.jpg",
        modelName: " Realme C33 128GB",
        price: 54999,
    },
    {
        images: "./images/v1.jpg",
        modelName: "Vivo Y100",
        price: 56999,
    },
    {
        images: "./images/v2.jpg",
        modelName: "Vivo V50e",
        price: 108999,
    },
    {
        images: "./images/v3.jpg",
        modelName: "Vivo V50",
        price: 131999,
    },
    {
        images: "./images/v4.jpg",
        modelName: "Vivo Y04",
        price: 34999,
    },
    {
        images: "./images/rn1.jpg",
        modelName: "Redmi Note 13 4G",
        price: 56000,
    },
    {
        images: "./images/rn2.jpg",
        modelName: "Xiaomi Redmi Note 13 Pro Plus",
        price: 45000,
    },
    {
        images: "./images/rn3.jpg",
        modelName: "Xiaomi Redmi 14R",
        price: 43999,
    },
    {
        images: "./images/rn4.jpg",
        modelName: "Xiaomi Redmi Note 14",
        price: 59999,
    },
    {
        images: "./images/o1.jpg",
        modelName: "Oppo A78",
        price: 64999,
    },
    {
        images: "./images/o2.jpg",
        modelName: "Oppo Reno 11",
        price: 129999,
    },
    {
        images: "./images/o3.jpg",
        modelName: "Oppo Reno 6 Pro",
        price: 123999,
    },

    {
        images: "images/o4.jpg",
        modelName: "Oppo A77",
        price: 699999,
    }
]

for (var i = 0; i < Mobiles.length; i++) {
    main.innerHTML +=`
     <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
    <div class="card"  style="width: 18rem;">
  <img src="${Mobiles[i].images}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${Mobiles[i].modelName}</h5>
    <p class="card-text">${Mobiles[i].price}</p>
   <a href="#" class="btn btn-primary">Order Now</a>
    </div>
</div>
</div>`
}





