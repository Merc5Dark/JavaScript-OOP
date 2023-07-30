// Using the WeakMap data structure to store the private property '_radius'
const _radius = new WeakMap();

// Defining the Circle class
export class Circle {
  // Constructor for creating Circle objects with a given radius
  constructor(radius) {
    // Using WeakMap to associate the private '_radius' property with each Circle instance
    _radius.set(this, radius);
  }

  // Method for drawing the Circle and displaying its radius
  draw() {
    // Retrieving the radius from the WeakMap associated with the current instance
    console.log('Circle with radius ' + _radius.get(this));
  }
}
