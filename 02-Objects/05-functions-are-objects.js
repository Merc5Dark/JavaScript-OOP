// Constructor function
function Circle(radius) {
  this.radius = radius; // Property: radius with the value of the "radius" parameter
  this.draw = function() { // Method: draw is a function that logs 'draw'
    console.log('draw');
  }
}

const circle = new Circle(1); // Create a new instance of the Circle object using the "new" keyword and pass the radius value as 1

console.log(
  Circle.name, // Log the name property of the Circle function to the console
  Circle.length, // Log the length property of the Circle function to the console
  Circle.constructor, // Log the constructor property of the Circle function to the console
  Circle.call({}, 1, 2, 3), // Call the Circle function with an empty object as the "this" value and additional arguments 1, 2, 3
  Circle.apply({}, [1, 2 , 3]) // Call the Circle function with an empty object as the "this" value and an array [1, 2, 3] as arguments
);

const Circle2 = new Function('radius', `
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
`);
const circle2 = new Circle2(3); // Create a new instance of the Circle2 object using the "new" keyword and pass the radius value as 3
