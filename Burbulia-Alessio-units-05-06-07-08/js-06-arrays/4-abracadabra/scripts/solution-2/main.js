/**
 * @file: solution-2/main.js
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
    //work variable
    let arrayWord = str.split('');
    let result = '';
    arrayWord.splice(3, 1, 'X');
    for (let i = 0; i < arrayWord.length; i++) {
        result += arrayWord[i];
    }
    return result;
}
console.log(change4thLetter('abracadabra'));