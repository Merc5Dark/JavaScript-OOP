function Circle(radius) {
  // Instance members
  this.radius = radius; // Property: radius with the value of the "radius" parameter

  this.move = function() { // Method: move is a function that logs 'moving'
    console.log('moving');
  };
}

const circle1 = new Circle(3); // Create a new instance of the Circle object with a radius of 3

// Prototype members
Circle.prototype.draw = function () { // Method: draw is a function that logs 'draw'
  console.log('draw');
};

console.log(circle1); // Log the circle1 object to the console

// Only returns instance members
console.log(Object.keys(circle1)); // Log an array of instance member keys of the circle1 object to the console
// The logged output shows ["radius", "move"], which are the instance members of the circle1 object

// Returns all members (instance + prototype)
for (let key in circle1) { // Iterate over all properties of the circle1 object
  console.log(key); // Log each property key to the console
}
// The logged output shows "radius", "move", and "draw", which are the instance and prototype members of the circle1 object

let c = circle1.hasOwnProperty('radius'); // Check if the circle1 object has its own property called "radius"
let d = circle1.hasOwnProperty('draw'); // Check if the circle1 object has its own property called "draw"

console.log(c); // Log the result of the "hasOwnProperty" check for "radius" to the console (true)
console.log(d); // Log the result of the "hasOwnProperty" check for "draw" to the console (false)

