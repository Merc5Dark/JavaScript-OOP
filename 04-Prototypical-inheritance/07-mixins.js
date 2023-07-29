function mixin(target, ...sources) {
  // This is a mixin function that applies the properties and methods from multiple sources to a target object
  Object.assign(target, ...sources);
  // Use Object.assign to copy the properties and methods from each source object to the target object
}

const canEat = {
  eat: function() {
    this.hunger--;
    console.log('eating');
    // This is a method that represents the ability to eat
  }
};

const canWalk = {
  walk: function() {
    console.log('walking');
    // This is a method that represents the ability to walk
  }
};

const canSwim = {
  swim: function() {
    console.log('swimming');
    // This is a method that represents the ability to swim
  }
};

function Person() {
  // This is the constructor function for the Person object
}

mixin(Person.prototype, canEat, canWalk);
// Apply the canEat and canWalk abilities to the Person object by adding their properties and methods to the Person prototype

const person = new Person();
// Create a new instance of the Person object using the Person constructor

console.log(person);
// Output the person object to the console

function Goldfish() {
  // This is the constructor function for the Goldfish object
}

mixin(Goldfish.prototype, canEat, canSwim);
// Apply the canEat and canSwim abilities to the Goldfish object by adding their properties and methods to the Goldfish prototype

const fish = new Goldfish();
// Create a new instance of the Goldfish object using the Goldfish constructor

console.log(fish);
// Output the fish object to the console
