function Circle(radius) {
  this.radius = radius; // Property: radius with the value of the "radius" parameter
  this.draw = function() { // Method: draw is a function that logs 'draw'
    console.log('draw');
  }
}

const circle = new Circle(10); // Create a new instance of the Circle object with a radius of 10
console.log(circle); // Log the circle object to the console

// ADD
circle.location = {x: 1, y: 2}; // Add a new property "location" to the circle object with an object value {x: 1, y: 2}

const propName = 'location2'; // Declare a variable "propName" with the value 'location2'
circle[propName] = {x: 1, y: 2}; // Add a new property "location2" to the circle object with an object value {x: 1, y: 2}

// DELETE
delete circle.location; // Delete the "location" property from the circle object

delete circle['location2']; // Delete the "location2" property from the circle object

