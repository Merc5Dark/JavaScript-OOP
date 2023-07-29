// Define an object called "circle"
const circle = {
  radius: 1, // Property: radius with a value of 1
  location: { // Property: location is an object with properties x and y
    x: 1, // Property: x with a value of 1
    y: 1 // Property: y with a value of 1
  },
  draw: function() { // Method: draw is a function that logs 'draw'
    console.log('draw');
  }
};

// Call the draw method of the circle object
circle.draw();
