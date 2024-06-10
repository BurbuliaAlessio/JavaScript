/**
 * @file: solution-1/main.js
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

function change4thLetter(str) {
    let arrayWord = str.split('');
    arrayWord[3] = 'X';
    arrayWord.join();
    return     arrayWord.join();
}

console.log(change4thLetter('abracadabra'));