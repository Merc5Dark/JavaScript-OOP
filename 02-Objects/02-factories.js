// Define a factory function called "createCircle" that takes a "radius" parameter
function createCircle(radius) {
  return {
    radius, // Property: radius with the value of the "radius" parameter
    draw: function() { // Method: draw is a function that logs 'draw'
      console.log('draw');
    }
  };
}

// Create a circle object using the createCircle function and pass the radius value as 1
const circle = createCircle(1);
circle.draw();
