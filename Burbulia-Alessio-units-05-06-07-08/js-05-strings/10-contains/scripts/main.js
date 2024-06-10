/**
 * @file: main.js
 * @author: Alessio Burbulia
 * 10.Contains
 * ● Create a function called aContainsb
 * ● It should take in two strings, and return true if the 
 *   first string contains the second,
 *   otherwise it should return false
 * 
 * For example
 * aContainsB ("Another hello world", "hell");
 */

/**
 * this function return true when 
 * str2 is a sub string of str1
 * @param {string} str1 - a string
 * @param {string} str2 - a string
 * @return {boolean} isConstain
*/
function aContainsB(str1, str2) {
    let isContain;//result
    if(typeof str1 === 'string' && typeof str2 === 'string' && str1.length > str2.length){//!error control 
        index = str1.indexOf(str2);
        if (index !== -1)
            isContain = true;
        else
            isContain = false;
        }
    else
        isContain = 'aContainsB() work with only string str1.length > string str2.length';    
    return isContain;
}

console.log(aContainsB("Another hello world", "hell"));
console.log(aContainsB("Another hello world", "held"));
console.log(aContainsB("held", "Another hello world"));
console.log(aContainsB(0));