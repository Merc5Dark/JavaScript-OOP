// Value types (Primitives)
Number // Represents numeric values
String // Represents textual values
Boolean // Represents true or false values
Symbol // Represents unique identifiers
undefined // Represents the absence of a value
null // Represents the intentional absence of any object value

// Reference types
Object // Represents a collection of key-value pairs
Function // Represents a reusable block of code
Array // Represents an ordered list of values

///////////////////////////////

let a = 10; // Declare a variable "a" and assign it the value 10
let b = a; // Declare a variable "b" and assign it the value of "a" (10)
a = 20; // Update the value of "a" to 20
console.log(a, b); // Log the values of "a" (20) and "b" (10) to the console

let c = {value: 10}; // Declare an object "c" with a property "value" assigned the value 10
let d = c; // Declare a variable "d" and assign it the reference to the object "c"
c.value = 20; // Update the value of the "value" property in object "c" to 20
console.log(c, d); // Log the objects "c" and "d" to the console (both will have the updated value of 20)

////////////////////////////////

let num = 10; // Declare a variable "num" and assign it the value 10

function increase(num) { // Define a function "increase" that takes a parameter "num"
  num++ // Increment the value of "num" by 1 (but only within the scope of the function)
}
increase(num); // Call the "increase" function and pass "num" as an argument
console.log(num); // Log the value of "num" (still 10) to the console

let obj = {value: 10}; // Declare an object "obj" with a property "value" assigned the value 10

function increase(obj) { // Define a function "increase" that takes a parameter "obj"
  obj.value++ // Increment the value of the "value" property in the object "obj" by 1
}
increase(obj); // Call the "increase" function and pass "obj" as an argument
console.log(obj); // Log the object "obj" to the console (the "value" property is now 11)

// Primitives are copied by their value
// Objects are copied by their reference

