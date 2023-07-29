function HtmlElement() {
  // This is the constructor function for the HtmlElement object
  this.click = function() {
    console.log('clicked');
    // This is a method specific to the HtmlElement object that represents a click action
  };
}

HtmlElement.prototype.focus = function() {
  console.log('focused');
  // This is a method defined in the HtmlElement prototype that represents a focus action
};

function HtmlSelectElement(items = []) {
  // This is the constructor function for the HtmlSelectElement object
  this.items = items;
  // Initialize the items property with the provided items array or an empty array if no items are provided

  this.addItem = function(item) {
    this.items.push(item);
    // This is a method specific to the HtmlSelectElement object that adds an item to the items array
  };

  this.removeItem = function(item) {
    this.items.splice(this.items.indexOf(item), 1);
    // This is a method specific to the HtmlSelectElement object that removes an item from the items array
  };
}

HtmlSelectElement.prototype = new HtmlElement();
// Set the prototype of HtmlSelectElement to be an instance of HtmlElement
// This establishes a prototype chain where HtmlSelectElement inherits from HtmlElement

HtmlSelectElement.prototype.constructor = HtmlElement;
// Set the constructor property of HtmlSelectElement back to the HtmlElement constructor
// This ensures that the constructor property correctly points to the HtmlElement constructor

const e = new HtmlElement();
// Create a new instance of the HtmlElement object using the HtmlElement constructor

const s = new HtmlSelectElement([1, 3, 6]);
// Create a new instance of the HtmlSelectElement object using the HtmlSelectElement constructor
// Provide an array [1, 3, 6] as the initial items for the HtmlSelectElement

