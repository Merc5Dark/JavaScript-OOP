let myArray = []; // Declare an empty array and assign it to the variable "myArray"
console.log(myArray); // Log the value of "myArray" to the console

// The logged output displays the properties and methods available on the Array object, as well as on the Object object.

// Objects created using array literals or the Array constructor inherit properties and methods from the Array.prototype object.
// Additionally, they also inherit properties and methods from the Object.prototype object, as all objects in JavaScript ultimately inherit from Object.prototype.

// The logged output shows the properties and methods available on the Array.prototype object and the Object.prototype object.

function Circle(radius) {
  this.radius = radius; // Property: radius with the value of the "radius" parameter
  this.draw = function() { // Method: draw is a function that logs 'draw'
    console.log('draw');
  };
}

const circle = new Circle(12); // Create a new instance of the Circle object with a radius of 12
console.log(circle); // Log the circle object to the console

// Objects created using the same constructor share the same prototype object.
// The circle object inherits properties and methods from the Circle.prototype object, which is the prototype of objects created using the Circle constructor.

