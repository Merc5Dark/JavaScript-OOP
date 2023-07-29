function Stopwatch() {
  let startTime, endTime, running, duration = 0;

  // Define the "duration" property with custom getter and setter
  Object.defineProperty(this, 'duration', {
    get: function() {
      return duration;
    },
    set: function(value) {
      duration = value;
    }
  });

  // Define the "startTime" property with custom getter
  Object.defineProperty(this, 'startTime', {
    get: function() {
      return startTime;
    }
  });

  // Define the "endTime" property with custom getter
  Object.defineProperty(this, 'endTime', {
    get: function() {
      return endTime;
    }
  });

  // Define the "running" property with custom getter
  Object.defineProperty(this, 'running', {
    get: function() {
      return running;
    }
  });
}

// Define the "start" method on the prototype of Stopwatch
Stopwatch.prototype.start = function() {
  if (this.running) {
    throw new Error('Stopwatch has already started!');
  } else {
    this.running = true; // Set the "running" property to true
    this.startTime = new Date(); // Set the "startTime" property to the current date and time
  }
};

// Define the "stop" method on the prototype of Stopwatch
Stopwatch.prototype.stop = function() {
  if (!this.running) {
    throw new Error('Stopwatch is not started!');
  } else {
    this.running = false; // Set the "running" property to false
    this.endTime = new Date(); // Set the "endTime" property to the current date and time

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000; // Calculate the elapsed time in seconds
    this.duration += seconds; // Add the elapsed time to the "duration" property
  }
};

// Define the "reset" method on the prototype of Stopwatch
Stopwatch.prototype.reset = function() {
  this.startTime = null; // Reset the "startTime" property
  this.endTime = null; // Reset the "endTime" property
  this.running = false; // Set the "running" property to false
  this.duration = 0; // Reset the "duration" property to 0
};

const sw = new Stopwatch(); // Create a new instance of the Stopwatch object

// The code defines a Stopwatch object with instance properties "startTime", "endTime", "running", and "duration".
// These properties are defined using Object.defineProperty() with custom getters and setters.
// The prototype of Stopwatch is then extended with methods "start", "stop", and "reset" for controlling the stopwatch functionality.

// The Stopwatch object can be used to measure time intervals and track the duration of operations.
// The "sw" instance of Stopwatch can be used to start, stop, and reset the stopwatch, and retrieve the duration.
// The commented phrase "Premature optimization is the root of all evil" is a well-known quote cautioning against over-optimizing code before identifying actual performance bottlenecks.
