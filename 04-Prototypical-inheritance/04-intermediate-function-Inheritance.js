function Shape(color) {
  // This is the constructor function for the Shape object
  this.color = color;
  // Assign the "color" parameter to the "color" property of the Shape object
}

Shape.prototype.duplicate = function() {
  console.log('duplicate');
  // This is a prototype method "duplicate" for the Shape object
};

function extend(Child, Parent) {
  // This is a helper function to establish prototype inheritance
  Child.prototype = Object.create(Parent.prototype);
  // Set the Child prototype to be an object created from the Parent prototype
  // This establishes a prototype chain where Child inherits from Parent

  Child.prototype.constructor = Child;
  // Set the constructor property of the Child prototype back to the Child constructor
  // This ensures that the constructor property correctly points to the Child constructor
}

function Circle(radius, color) {
  // This is the constructor function for the Circle object
  // It takes "radius" and "color" parameters

  Shape.call(this, color);
  // Call the Shape constructor function with the current Circle object as the "this" value
  // This allows Circle to inherit the "color" property from Shape

  this.radius = radius;
  // Assign the "radius" parameter to the "radius" property of the Circle object
}

extend(Circle, Shape);
// Use the extend function to establish prototype inheritance between Circle and Shape

Circle.prototype.draw = function() {
  console.log('draw');
  // This is a prototype method "draw" specific to the Circle object
};

function Square(size) {
  // This is the constructor function for the Square object
  // It takes a "size" parameter
  this.size = size;
  // Assign the "size" parameter to the "size" property of the Square object
}

extend(Square, Shape);
// Use the extend function to establish prototype inheritance between Square and Shape

const s = new Shape('green');
// Create a new instance of the Shape object using the Shape constructor
// Pass 'green' as the color parameter

const c = new Circle(1, 'red');
// Create a new instance of the Circle object using the Circle constructor
// Pass 1 as the radius parameter and 'red' as the color parameter

const sq = new Square(10);
// Create a new instance of the Square object using the Square constructor
// Pass 10 as the size parameter

