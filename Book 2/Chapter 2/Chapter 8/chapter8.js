typeof 8;
'number'
// var doTheMath = 7 + 8 + 36 +18 + 12;
// undefined
// typeof doTheMath;
// 'number'
// typeof "the cat's favorite food";
// 'string'

// Working with Objects

var dreamCar = {
  make: "Mercedez",
  model: "Maybach",
  color: "gold",
  year: 2025,
  "body style" : "Luxury car",
  price: 500000
}

// alert("The type of dreamCar is: " + typeof dreamCar)


document.getElementById("pricetag").innerHTML = dreamCar.price;
document.getElementById("modelyear").innerHTML = dreamCar.year;
document.getElementById("body").style.backgroundColor = dreamCar.color;
document.getElementById("body").innerHTML = dreamCar.make + " " + dreamCar.model;
