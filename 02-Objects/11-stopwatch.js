function Stopwatch() {
  let startTime, endTime, running, duration = 0;

  this.start = function() { // Method: start is a function that starts the stopwatch
    if (running) {
      throw new Error('Stopwatch has already started!');
    } else {
      running = true;
      startTime = new Date(); // Record the start time using the Date object
    }
  };

  this.stop = function() { // Method: stop is a function that stops the stopwatch
    if (!running) {
      throw new Error('Stopwatch is not started!');
    } else {
      running = false;
      endTime = new Date(); // Record the end time using the Date object

      const seconds = (endTime.getTime() - startTime.getTime()) / 1000; // Calculate the elapsed time in seconds
      duration += seconds; // Update the duration by adding the elapsed time
    }
  };

  this.reset = function() { // Method: reset is a function that resets the stopwatch
    startTime = null; // Reset the start time
    endTime = null; // Reset the end time
    running = false; // Set running to false
    duration = 0; // Reset the duration to 0
  };

  Object.defineProperty(this, 'duration', { // Define a read-only property "duration" on the stopwatch object
    get: function() { // Getter: Retrieves the value of duration
      return duration;
    }
  });
}

const sw = new Stopwatch(); // Create a new instance of the Stopwatch object

// Test these in your console
sw.start(); // Start the stopwatch
sw.stop(); // Stop the stopwatch
sw.reset(); // Reset the stopwatch
console.log(sw.duration); // Log the duration of the stopwatch

