/**
 * @file: solution-3/main.js
 * @author: Alessio Burbulia
 * 
 * this file permise to change the 4th letter with "X"
 */

/**
 * this function separate 
 * the string in a different 
 * letter substring and change the 4th letter with 'X'
 * @param {string} str - the string
 * @return {string} result - return a modify string 
*/
const change4thLetter = (str) =>{
    let result = str.slice(0, 3) + 'X' + str.slice(5);
    return result;
}
console.log(change4thLetter('abracadabra'));