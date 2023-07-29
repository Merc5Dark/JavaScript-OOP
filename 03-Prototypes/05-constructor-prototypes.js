function Circle(radius) {
  this.radius = radius; // Property: radius with the value of the "radius" parameter
}

const circle = new Circle(8); // Create a new instance of the Circle object with a radius of 8

Circle.prototype; // The prototype object of the Circle constructor

let obj = {}; // Declare an empty object "obj"
console.log(Object.getPrototypeOf(obj)); // Get the prototype of "obj"

// The logged output displays the properties and methods available on the Object.prototype object.
// These properties and methods are inherited by all objects in JavaScript.

Object.prototype; // The prototype object of the Object constructor

////////////////////////////////////////////

let array = []; // Declare an empty array "array"
console.log(Object.getPrototypeOf(array)); // Get the prototype of "array"

// The logged output displays the properties and methods available on the Array.prototype object.
// These properties and methods are inherited by all arrays in JavaScript.

Array.prototype; // The prototype object of the Array constructor

