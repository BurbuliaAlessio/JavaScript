/**
 * A concatenate of my data and other string
 * @param {number} num1 - first number
 * @param {number} num2 - Second number
 * @returns {number} result - the sum of my param
 */
function addNumbers(num1, num2) {
    let result = num1 + num2;
    return result; // Anything after this line won't be executed
}
let sum = addNumbers(5, 2);//sum is a global variable
console.log(sum);