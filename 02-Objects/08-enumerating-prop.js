function Circle(radius) {
  this.radius = radius; // Property: radius with the value of the "radius" parameter
  this.draw = function() { // Method: draw is a function that logs 'draw'
    console.log('draw');
  }
}

const circle = new Circle(10); // Create a new instance of the Circle object with a radius of 10

// for...in loop
for (let key in circle) {
  if (typeof circle[key] !== 'function') // Check if the value of the current key is not a function
    console.log(key, circle[key]); // Log the key and its corresponding value to the console
}

// Object.keys
const keys = Object.keys(circle); // Retrieve an array of keys from the circle object
console.log(keys); // Log the array of keys to the console
keys.map(k => {
  console.log(k, circle[k]); // Log each key and its corresponding value to the console
});

// Object.values
const values = Object.values(circle); // Retrieve an array of values from the circle object
console.log(values); // Log the array of values to the console
values.map(v => {
  console.log(v); // Log each value to the console
});

// Object.entries
const entry = Object.entries(circle); // Retrieve an array of key-value pairs from the circle object
console.log(entry); // Log the array of key-value pairs to the console
entry.map(items => {
  let k = items[0]; // Retrieve the key from each key-value pair
  let v = items[1]; // Retrieve the value from each key-value pair
  console.log(k, v); // Log each key and its corresponding value to the console
});

// In operator
if ('radius' in circle) { // Check if the circle object has a property called "radius"
  console.log('Circle has a radius'); // Log a message to the console if the property is present
}

