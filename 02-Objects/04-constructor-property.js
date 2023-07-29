// Factory function
function createCircle(radius) {
  return {
    radius, // Property: radius with the value of the "radius" parameter
    draw: function() { // Method: draw is a function that logs 'draw'
      console.log('draw');
    }
  };
}
const circleFac = createCircle(1); // Create a circle object using the createCircle factory function and pass the radius value as 1
console.log(circleFac.constructor); // Log the constructor property of circleFac object to the console
// Check console

// Constructor function
function Circle(radius) {
  this.radius = radius; // Property: radius with the value of the "radius" parameter
  this.draw = function() { // Method: draw is a function that logs 'draw'
    console.log('draw');
  }
}
const circleCon = new Circle(1); // Create a new instance of the Circle object using the "new" keyword and pass the radius value as 1
console.log(circleCon.constructor); // Log the constructor property of circleCon object to the console
// Check console

// Other properties
new String() // Create a new instance of the String object
new Boolean() // Create a new instance of the Boolean object
new Number() // Create a new instance of the Number object

