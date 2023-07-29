let person = { name: 'Bolaji' }; // Declare an object "person" with a property "name" assigned the value 'Bolaji'
console.log(person); // Log the "person" object to the console

for (let key in person) { // Iterate over the properties of the "person" object
  console.log(key, person[key]); // Log each key and its corresponding value to the console
}

console.log(Object.keys(person)); // Log an array of keys of the "person" object to the console

// In JavaScript, properties have attributes attached to them that determine their behavior and how they can be manipulated.

let objectBase = Object.getPrototypeOf(person); // Retrieve the prototype of the "person" object
let descriptor1 = Object.getOwnPropertyDescriptor(objectBase, 'toString'); // Retrieve the property descriptor of the "toString" method
// The property descriptor for "toString" method shows configurable: true, enumerable: false, value: ƒ toString(), writable: true

let descriptor2 = Object.getOwnPropertyDescriptor(person, 'name'); // Retrieve the property descriptor of the "name" property
// The property descriptor for "name" property shows configurable: true, enumerable: true, value: "Bolaji", writable: true

console.log(descriptor1); // Log the property descriptor of "toString" to the console
console.log(descriptor2); // Log the property descriptor of "name" to the console

//////////////////////////////////////////////

Object.defineProperty(person, 'name', { // Define property attributes for the "name" property of the "person" object
  writable: false, // The "name" property cannot be changed (writable: false)
  enumerable: false, // The "name" property will not be included when iterating over properties (enumerable: false)
  configurable: false // The "name" property cannot be deleted or have its attributes changed (configurable: false)
});

person.name = 'Bale'; // Attempting to change the value of the "name" property won't work
delete person.name; // Attempting to delete the "name" property won't work
Object.keys(person); // Attempting to get an array of keys won't include the "name" property

console.log(person); // Log the "person" object to the console (with modified property attributes)

