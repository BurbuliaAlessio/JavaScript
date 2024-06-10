/**
 * @file: main.js
 * @author: Alessio Burbulia
 * 
 * 1-the-dishwasher
 * Create a simulation of a dishwasher system using two stacks of dishes
 *   ● one stack represents dirty dishes, and the other represents clean dishes
 *   ● the dirty stack has a random number of plates 10 - 50
 *   ● useful functions
 *     ○ washDish - moves a dish from the dirty stack to the clean stack
 *     ○ displayStacks - displays the current state of both stacks in the console
 *     ○ runSimulation - simulate washing all dirty dishes adding a random delay between steps
 * Bonus
 *   1. have three stacks of dirty dishes and one clean stack
 *   2. the dishwasher is able to wash two dishes at a time
 */

/**
 * Utility function to generate a random integer between min and max (inclusive).
 * 
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} A random integer between min and max.
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Initializes the stacks of dirty and clean dishes.
 * `dirtyStack` is filled with a random number of plates (between 10 and 50).
 * `cleanStack` is initially empty.
 */
let dirtyStack1 = [];
let dirtyStack2 = [];
let dirtyStack3 = [];

dirtyStack1 = dirtyDashers(dirtyStack1);
dirtyStack2 = dirtyDashers(dirtyStack2);
dirtyStack3 = dirtyDashers(dirtyStack3);

let cleanStack = [];

  /**
   * cunstruct an array with a casual number of string plate
  */
  function dirtyDashers(dirtyStack){
    let dimensionArray = getRandomInt(10, 50);
    for (let index = 0; index < dimensionArray; index++) {
        dirtyStack[index] = `plate ${index + 1}`;
    }
    return dirtyStack;
  }

/**
 * Moves a dish from the dirty stack to the clean stack.
 * Logs the action of washing a dish.
 */
function washDish(dirtyStack) {
  if (dirtyStack.length > 0) {
    const dish = dirtyStack.shift();
    cleanStack.push(dish);
    console.log(`Washed ${dish}`);
  } else {
    console.log("No more dirty dishes to wash.");
  }
}

/**
 * Displays the current state of both the dirty stack and the clean stack in the console.
 */
function displayStacks() {
  console.log("Dirty Stack:", dirtyStack1);
  console.log("Dirty Stack:", dirtyStack2);
  console.log("Dirty Stack:", dirtyStack3);
  console.log("Clean Stack:", cleanStack);
}

/**
 * Simulates washing all dirty dishes, adding a random delay between each wash.
 * The delay is set to a random value between 500 and 1500 milliseconds.
 */
function runSimulation(dirtyStack) {
  if (dirtyStack.length === 0) {
    console.log("All dishes are already clean!");
    return;
  }

  /**
   * Washes the next dish after a random delay and displays the state of the stacks.
   * Continues until all dishes have been washed.
   */
  function washNextDish() {
    if (dirtyStack.length > 0) {
      washDish(dirtyStack1);
      washDish(dirtyStack2);
      
      displayStacks();

      // Set a random delay between 500 and 1500 milliseconds
      const delay = getRandomInt(500, 1500);
      setTimeout(washNextDish, delay);
    } 
    else {
      console.log("All dishes have been washed!");
    }
  }
washNextDish();
}

// Start the simulation
runSimulation(dirtyStack1);