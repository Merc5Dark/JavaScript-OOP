// OOP Practice

// Objects and Classes

let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021,
    start: function() {
      console.log("The car has started.");
    },
    stop: function() {
      console.log("The car has stopped.");
    }
};

//////////////////////////////////////////////////

class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    start() {
      console.log("The car has started.");
    }
  
    stop() {
      console.log("The car has stopped.");
    }
}
  
//////////////////////////////////////////////////

let myCar = new Car("Toyota", "Corolla", 2021);

////////////////////////////////////////////////////
