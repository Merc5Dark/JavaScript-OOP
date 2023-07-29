function Circle(radius) {
  // Instance members
  this.radius = radius; // Property: radius with the value of the "radius" parameter

  this.move = function() { // Method: move is a function that logs 'draw', calls the draw method, and logs 'moving'
    this.draw(); // Call the draw method of the Circle object
    console.log('moving');
  };
}

// Prototype members
Circle.prototype.draw = function() { // Method: draw is a function that logs 'draw'
  console.log('draw');
};

const circle1 = new Circle(3); // Create a new instance of the Circle object with a radius of 3
const circle2 = new Circle(5); // Create a new instance of the Circle object with a radius of 5

console.log(circle1); // Log the circle1 object to the console
console.log(circle2); // Log the circle2 object to the console

circle1.move(); // Call the move method of the circle1 object

circle1.toString(); // Call the toString method of the circle1 object (inherited from Object.prototype) and log the result

// You can change the behavior of root prototype methods.

Circle.prototype.toString = function() { // Override the default toString method of the Circle object
  return 'Circle with radius ' + this.radius; // Return a custom string representation of the Circle object
};

console.log(circle1.toString()); // Log the result of calling the custom toString method on circle1

// The toString method is now customized to return a specific string representation for Circle objects.

