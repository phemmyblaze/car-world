let cars = [
    {
        name: "Chevrolet",
        image: "images/Audi.jpg",
        price: "$39,000",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut maiores sapiente sint, et asperiores enim qui harum atque nemo est quod eaque vel doloremque. Inventore nemo praesentium ullam quibusdam aliquam."
    },
    {
        name: "BMW",
        image: "images/bmw.jpg",
        price: "$19,000"
    },
    {
        name: "Ferarri",
        image: "images/ferarri.jpg",
        price: "$50,000"
    },
    {
        name: "Lamboghini",
        image: "images/lambo.jpg",
        price: "$39,000"
    },
    {
        name: "Benz",
        image: "images/nexter.jpg",
        price: "$45,000"
    },
    {
        name: "Honda",
        image: "images/Honda.jpg",
        price: "$20,000"
    },
    {
        name: "Ferarri",
        image: "images/ferarri.jpg",
        price: "$39,000"
    },
    {
        name: "Lamboghini",
        image: "images/lambo.jpg",
        price: "$39,000"
    },
    {
        name: "Bmw",
        image: "images/bmw.jpg",
        price: "$29,000"
    },
    {
        name: "Honda",
        image: "images/nexter.jpg",
        price: "$50,000"
    },
    {
        name: "Ferarri",
        image: "images/ferarri.jpg",
        price: "$39,000"
    },
    {
        name: "Lamboghini",
        image: "images/lambo.jpg",
        price: "$39,000"
    }
]

let carSection = document.getElementById('car-gallery');
let html ;
 cars.forEach(e => {
    html = `
    <div class="col-md-4 col-12">
    <div class="card m-4">
        <img src="./${e.image}" class="card-img-top"/>
    <div class="card-body rounded-bottom">
        <h5 class="card-title">Name: ${e.name}</h5>
        <h6 class="card-text">Cost: ${e.price}</h6>
    </div> 
    </div>
    </div>
    `
    carSection.innerHTML +=  html
})


{/* <div class="col-md-4 col-12">
<div class="card mb-1 pe-5">
      <img src="./images/${e.image}.jpg" class="card-img-top"/>
  <div class="card-body p-4 rounded-bottom">
    <h5 class="card-title">Name: ${e.name}</h5>
    <h6 class="card-text">Cost: ${e.price}</h6>
  </div> 
</div>
</div> */}



// class Gallery {

//     //clone the table preset then set an enum
//     // if table has been initiated, add new table if not replace the table
//     constructor(data) {
//         this.data = data;
//     }

    

    
//     display() {
//         let content = document.getElementById('car-gallery');
//         content.innerHTML = null;
        
//         this.data.forEach(element => {
//             let row, column1, column2, column3, price, nameOfCar;
//             row = document.createElement('div');
//             row.className = "row mt-3 carObject";


//             column1 = document.createElement('img');
//             column1.src = element.image;
//             column2 = document.createElement('h5');
//             column3 = document.createElement('h6');
//             price =  document.createTextNode(element.price);

//             nameOfCar = document.createTextNode(element.name);
//             column2.appendChild(price);
//             column3.appendChild(nameOfCar);
        
//             row.appendChild(column1);
//             row.appendChild(column2);
//             row.appendChild(column3);
//             content.appendChild(row);
//         });
    
//     }

    

    
// }

  
    
// test = new Gallery(cars);
// test.display();

// let carSection = document.getElementById("car-gallery");
// let html = "";
// cars.forEach(e => {
//     html += `
//     <div class="card d-flex justify-content-center m-2">
//         <img src="images/${e.image}.jpg" class=img-fluid/>
//         <div class="card-body rounded-bottom">
//             <h5 class="card-title">${e.name}</h5>
//             <h6 class="card-text">${e.price}</h6>
//         </div> 
//     </div>
//     `
//     console.log(e);

//     carSection.innerHTML = html
// })


// let cars = [
//     {
//         name: "benz",
//         car_img: " ",
//         price: "$39,000"
//     },
//     {
//         name: "school",
//         car_img: " ",
//         price: "$9,000"
//     },
//     {
//         name: "be",
//         car_img: " ",
//         price: "$3,000"
//     },
//     {
//         name: "gh",
//         car_img: " ",
//         price: "$8798"
//     },
//     {
//         name: "benz",
//         car_img: " ",
//         price: "$39,000"
//     },
//     {
//         name: "benz",
//         car_img: " ",
//         price: "$39,000"
//     },
//     {
//         name: "benz",
//         car_img: " ",
//         price: "$39,000"
//     },
//     {
//         name: "benz",
//         car_img: " ",
//         price: "$39,000"
//     },
//     {
//         name: "benz",
//         car_img: " ",
//         price: "$39,000"
//     },
//     {
//         name: "benz",
//         car_img: " ",
//         price: "$39,000"
//     },
//     {
//         name: "benz",
//         car_img: " ",
//         price: "$39,000"
//     },
//     {
//         name: "benz",
//         car_img: "ferarri",
//         price: "$39,000"
//     },
//     {
//         name: "benz",
//         car_img: "honda",
//         price: "$39,000"
//     }
// ];


// let carSection = document.getElementById('gallery');
// let html = "";
// cars.forEach(e => {
//     html += `
//     <div class="car-card">
//         <div class="car_img">
//             <img src="images/${e.car_img}.jpg">
//         </div>

//         <div class="car-info">
//             <h3>${e.name}</h3>
//             <h6>${e.price}</h6>
//         </div>
//     </div>
//     `
//     console.log(e)

//     carSection.innerHTML = html
// })