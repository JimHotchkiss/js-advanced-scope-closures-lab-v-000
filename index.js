// produceDrivingRange
// blockRange is range parameter that is passed to the function
function produceDrivingRange(blockRange) {
  return function(block1, block2) {
    let distance = parseInt(block2) - parseInt(block1);
    let difference = Math.abs(distance - blockRange)
    if(distance < blockRange) {
      return `within range by ${difference}`
    } else {
      return `${difference} blocks out of range`
    }
  }
}

// produceTipCalculator
function produceTipCalculator(percent) {
  return function(fare) {
    return percent * fare
  }
}

// createDriver
// returns a function that returns a class that produces a Driver class. The class has reference to a driverId that is incremented each time a new driver is created. The rest of the code base does not have access to driverId.
function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
