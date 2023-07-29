function Shape() {
  // This is the constructor function for the Shape object
  // No specific properties or methods are defined in this example
}

Shape.prototype.duplicate = function() {
  console.log('duplicate');
  // This is a prototype method "duplicate" for the Shape object
};

function Circle(radius) {
  this.radius = radius;
  // This is the constructor function for the Circle object
  // It takes a "radius" parameter and assigns it to the "radius" property of the Circle object
}

Circle.prototype = Object.create(Shape.prototype);
// Set the Circle prototype to be an object created from the Shape prototype
// This establishes a prototype chain where Circle inherits from Shape

Circle.prototype.draw = function() {
  console.log('draw');
  // This is a prototype method "draw" specific to the Circle object
};

const s = new Shape();
// Create a new instance of the Shape object using the Shape constructor

const c = new Circle(1);
// Create a new instance of the Circle object using the Circle constructor
// It takes a "radius" argument of 1 and assigns it to the "radius" property of the Circle object

