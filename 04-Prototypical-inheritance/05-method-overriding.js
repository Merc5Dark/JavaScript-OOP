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
  Shape.prototype.duplicate.call(this);
  // Call the Shape's duplicate method using "call" to set the correct "this" value
  // This ensures that the Shape's duplicate method is executed for the current Circle object

  console.log('duplicate circle');
  // This is a prototype method "duplicate" specific to the Circle object
};

const c = new Circle();
// Create a new instance of the Circle object using the Circle constructor

