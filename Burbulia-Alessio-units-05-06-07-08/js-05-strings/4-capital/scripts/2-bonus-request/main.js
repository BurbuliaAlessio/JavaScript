/**
 * @file: main.js
 * @author: Alessio Burbulia
 * 
 * ● Write a JavaScript function called capital which has one parameter, a string, and which returns
 *   that string with the first letter capitalized
 * ● For example, the call toLowerCase()("hello world") should return the string "Hello world"
 *    Bonus
 *   Modify the function so that it capitalizes each word. capital2("my name is john") should return the
 *   string "My Name Is John"
 */

/**
 * return a Upper substring
 * @param {string} s - the string
 * @return {string} calipalizeS - the string with the new value
*/
const subS = subS => subS.toUpperCase()
/**
 * Capitalize every first word in my string.
 * I use the method replace, this method does n 
 * loops for how many "sub" string it found (fist param of raplace)
 * i put a regular exp, and for the second param I want to change 
 * the sub string selected in my current loop with the method 
 * toUpperCase
 * @param {string} s - the string
 * @return {string} calipalizeS - the string with the new value
*/
function capital(s){
    let calipalizeS;
    if (typeof s === 'string' && s.length > 0)
        calipalizeS = s.replace(/\b\w/g, subS);
    else
        calipalizeS = 'capital() work with only string.length > 0';
    return calipalizeS;
}

console.log(capital('marcello, what are you doing? I\'m at the mall'));
console.log(capital('a'));
console.log(capital('0'));
console.log(capital(0));