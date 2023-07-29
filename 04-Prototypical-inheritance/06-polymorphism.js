function extend(Child, Parent) {
  // This is a helper function to establish prototype inheritance
  Child.prototype = Object.create(Parent.prototype);
  // Set the Child prototype to be an object created from the Parent prototype
  // This establishes a prototype chain where Child inherits from Parent

  Child.prototype.constructor = Child;
  // Set the constructor property of the Child prototype back to the Child constructor
  // This ensures that the constructor property correctly points to the Child constructor
}

function Shape() {
  // This is the constructor function for the Shape object
}

Shape.prototype.duplicate = function() {
  console.log('duplicate shape');
  // This is a prototype method "duplicate" for the Shape object
};

function Circle() {
  // This is the constructor function for the Circle object
}
extend(Circle, Shape);
// Use the extend function to establish prototype inheritance between Circle and Shape

Circle.prototype.duplicate = function() {
  console.log('duplicate circle');
  // This is a prototype method "duplicate" specific to the Circle object
};

function Square() {
  // This is the constructor function for the Square object
}
extend(Square, Shape);
// Use the extend function to establish prototype inheritance between Square and Shape

Square.prototype.duplicate = function() {
  console.log('duplicate square');
  // This is a prototype method "duplicate" specific to the Square object
};

const shapes = [
  new Circle(),
  new Square(),
  new Circle(),
  new Square()
];
// Create an array of instances of the Circle and Square objects

shapes.map(shape => {
  shape.duplicate();
  // Call the "duplicate" method for each shape in the array
  // The specific "duplicate" method for each object will be executed
});
