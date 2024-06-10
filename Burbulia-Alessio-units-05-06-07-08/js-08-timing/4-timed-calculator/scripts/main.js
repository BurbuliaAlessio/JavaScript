/**
 * @file: main.js
 * @author: Alessio Burbulia
 * 
 * 4.Timed calculator
 * ● We will modify ‘Calculator’ exercise from the lesson about functions
 * ● Rewrite the last function that performs all 4 operations so that there is a
 * delay of 3 seconds between one operation and the next
 */

/**
 * Takes half of a number.
 * @param {number} number - The number to be halved.
 * @returns {number} - Half of the input number.
 */
function takeHalf(number) {
    return number / 2;
}

/**
 * Squares a number.
 * @param {number} number - The number to be squared.
 * @returns {number} - The square of the input number.
 */
function square(number) {
    return number * number;
}

/**
 * Calculates the area of a circle given its radius.
 * @param {number} radius - The radius of the circle.
 * @returns {number} - The area of the circle.
 */
function calculateAreaOfCircle(radius) {
    return Math.PI * radius * radius;
}

/**
 * Calculates the percentage of one number relative to another.
 * @param {number} part - The part of the whole.
 * @param {number} whole - The whole number.
 * @returns {number} - The percentage of the part relative to the whole.
 */
function calculatePercentage(part, whole) {
    return (part / whole) * 100;
}

/**
 * Performs a series of calculations on a given number:
 * - time out 3 second Takes half of the number.
 * - time out 3 second Squares the result.
 * - time out 3 second Calculates the area of a circle with the squared result as the radius.
 * - time out 3 second Calculates what percentage the area is of the squared result.
 * 
 * @param {number} number - The input number to perform calculations on.
 */
function calculator(number) {
    
    //variables
    let half;
    let squared;
    let area;
    let percentage;
    let timeOut = 3000;

    // Step 1: Take half of the number and store the result
    setTimeout(() => {
        half = takeHalf(number);
        console.log(`Half of ${number} is ${half}`);}, 
        timeOut);
        timeOut = timeOut + 3000;

    // Step 2: Square the result of step 1 and store that result
    setTimeout(() => {
        squared = square(half);
        console.log(`Square of ${half} is ${squared}`);},
        timeOut);
        timeOut = timeOut + 3000;

    // Step 3: Calculate the area of a circle with the result of step 2 as the radius
    setTimeout(() => {
        area = calculateAreaOfCircle(squared);
        console.log(`Area of a circle with radius ${squared} is ${area}`);},
        timeOut);
        timeOut = timeOut + 3000;

    // Step 4: Calculate what percentage that area is of the squared result
    setTimeout(() => {
        percentage = calculatePercentage(area, squared);
        console.log(`${area} is ${percentage}% of ${squared}`);},
        timeOut);
}

// Example usage
calculator(8);