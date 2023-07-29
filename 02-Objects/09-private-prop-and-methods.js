function Circle(radius) {
  this.radius = radius; // Property: radius with the value of the "radius" parameter

  let defaultLocation = { x: 0, y: 0 }; // Local variable: defaultLocation is an object with properties x and y

  let computeOptimumLocation = function() {
    // Function: computeOptimumLocation is a private function that performs some computations
    // ...
  }

  this.draw = function() { // Method: draw is a function that logs 'draw'
    computeOptimumLocation(); // Call the private function computeOptimumLocation()
    // defaultLocation is accessible within this function
    // this.radius is accessible within this function

    console.log('draw');
  }
}

const circle = new Circle(10); // Create a new instance of the Circle object with a radius of 10
circle.draw(); // Call the draw method of the circle object

