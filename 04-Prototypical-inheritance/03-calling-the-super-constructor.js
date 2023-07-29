function Shape(color) {
  // This is the constructor function for the Shape object
  this.color = color;
  // Assign the "color" parameter to the "color" property of the Shape object
}

Shape.prototype.duplicate = function() {
  console.log('duplicate');
  // This is a prototype method "duplicate" for the Shape object
};

function Circle(radius, color) {
  // This is the constructor function for the Circle object
  // It takes "radius" and "color" parameters

  Shape.call(this, color);
  // Call the Shape constructor function with the current Circle object as the "this" value
  // This allows Circle to inherit the "color" property from Shape

  this.radius = radius;
  // Assign the "radius" parameter to the "radius" property of the Circle object
}

Circle.prototype = Object.create(Shape.prototype);
// Set the Circle prototype to be an object created from the Shape prototype
// This establishes a prototype chain where Circle inherits from Shape

Circle.prototype.constructor = Circle;
// Set the constructor property of the Circle prototype back to the Circle constructor
// This ensures that the constructor property correctly points to the Circle constructor

Circle.prototype.draw = function() {
  console.log('draw');
  // This is a prototype method "draw" specific to the Circle object
};

const s = new Shape('green');
// Create a new instance of the Shape object using the Shape constructor
// Pass 'green' as the color parameter

const c = new Circle(1, 'red');
// Create a new instance of the Circle object using the Circle constructor
// Pass 1 as the radius parameter and 'red' as the color parameter

