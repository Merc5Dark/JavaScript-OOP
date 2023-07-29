// Define a constructor function called "Circle" that takes a "radius" parameter
function Circle(radius) {
  this.radius = radius; // Property: radius with the value of the "radius" parameter
  this.draw = function() { // Method: draw is a function that logs 'draw'
    console.log('draw');
  }
}

// Create a new instance of the Circle object using the "new" keyword and pass the radius value as 1
const circle = new Circle(1);
circle.draw();
