document.write("helloworld");
//alert("click me to close"); //pop messages
console.log("this is console");
document.getElementById("demo").innerHTML = "Html content";
//variables
let name = "helloworld";
let a, b, c;
a = 5;
b = 6;
c = a + b;
document.getElementById("demo1").innerHTML = c;
console.log(name);
console.log(name);
console.log(name);
console.log(name);
console.log(name);
//declare assignment operator ,assign value later
let adress, zip, state;
adress = "banalore";
zip = "560045";
state = "bg";
console.log(adress, zip, state);
// var constn
var somevalue = "somedata";
somevalue= "new value"
const addrs = "bg"; //cant assign new value
console.log(somevalue);
console.log(addrs);// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");
console.log(length);
console.log(lastName);
console.log(cars);
let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

document.getElementById("demo").iwebsitennerHTML = text;
var s = myFunction(4, 3);
document.getElementById("func").innerHTML = s;

function myFunction(a, b) {
  return a * b;
}
//string concatination
const firstname = "madhu";
const LastName = "sudhan";
//let fullname;
console.log("my fullname is:" + firstname + LastName);
let website = "google";
let url = "https://www." + website + ".com";
console.log(url);
// Create an object:
const car = {type:"Fiat", model:"500", color:"white"};

// Display some data from the object:
document.getElementById("demo").innerHTML = "The car type is " + car.type;
// Create an object:
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Display some data from the object:
document.getElementById("demo").innerHTML =
person1.firstName + " is " + person1.age + " years old.";


let hello = "";

hello = () => {
  return "Hello World! arraw functions";
}
document.getElementById("demo").innerHTML = hello();
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }
}

let date2 = new Date();
let year = date2.getFullYear();

let myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML=
"My car is " + myCar.age(year) + " years old.";
