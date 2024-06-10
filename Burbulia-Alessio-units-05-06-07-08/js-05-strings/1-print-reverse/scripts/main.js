/**
 * @file: main.js
 * @author: Alessio Burbulia
 * 
 * 1.Print reverse
 * ● Write a JavaScript function called printReverse which has one parameter, a string, and which
 *   prints that string in reverse
 * ● For example, the call printReverse("foobar") should result in "raboof" being displayed
*/

/**
 * print the reverse of my original string
 * @param {string} s - the string
 * @return {string} reverseS - the reverse of my original string
 */
function printReverse(s){
    let reverseS = '';  //initialization of reverse string
    if (typeof s === 'string' && s.length > 1){
            let lengthS = s.length;  //the lenght of my string

            for (let i = lengthS-1; i >= 0; i--){
                let sub = s.charAt(i); //get character at index i
                reverseS += sub; //concatenate to reverse string
            }
        }
    else
        reverseS = 'printReverse() work with only string.length > 1';
    return reverseS; //print the reversed string
}

console.log(printReverse('sir, I demand, I am a maid named iris'));
console.log(printReverse('A'));
console.log(printReverse(0));