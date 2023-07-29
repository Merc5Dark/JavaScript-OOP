function Circle(radius) {
  this.radius = radius; // Property: radius with the value of the "radius" parameter

  let defaultLocation = { x: 0, y: 0 }; // Local variable: defaultLocation is an object with properties x and y

  this.getDefaultLocation = function() { // Method: getDefaultLocation is a function that returns the defaultLocation object
    return defaultLocation;
  };

  this.draw = function() { // Method: draw is a function that logs 'draw'
    console.log('draw');
  };

  Object.defineProperty(this, 'defaultLocation', { // Define a new property "defaultLocation" on the circle object
    get: function() { // Getter: Retrieves the value of defaultLocation
      return defaultLocation;
    },
    set: function(value) { // Setter: Sets the value of defaultLocation
      if (!value.x || !value.y) { // Check if the value being set has properties x and y
        throw new Error('Invalid location'); // Throw an error if the value is invalid
      }
      defaultLocation = value; // Set the value of defaultLocation to the provided value
    }
  });
}

const circle = new Circle(10); // Create a new instance of the Circle object with a radius of 10
circle.defaultLocation = {x: 3, y: 5}; // Set the value of defaultLocation using the setter
// circle.defaultLocation = 3; // Error: Attempting to set an invalid value (throws an error)

console.log(circle.defaultLocation); // Log the value of defaultLocation using the getter

