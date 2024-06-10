/**
 * @file: main.js
 * @author: Alessio Burbulia
 * 
 * 2.Reverse
 * ● Write a JavaScript function called reverse which has one parameter, a string, and which returns
 *   that string in reverse
 * ● For example, the call reverse("foobar") should return the string "raboof"
 */

/**
 * print the reverse of my original string
 * @param {string} s - the string
 * @return {string} reverseS - the reverse of my original string
 */
function reverse(s){
    let reverseS = '';  //initialization of reverse string
    if (typeof s === 'string' && s.length > 1){
        let lengthS = s.length;  //the lenght of my string
        for (let i = lengthS-1; i >= 0; i--){
            let sub = s.charAt(i); //get character at index i
            reverseS += sub; //concatenate to reverse string
        }
    }
    else
        reverseS = 'reverse() work with only string.length > 1';
    
    return reverseS; //returns the reversed string
}
console.log(reverse('Yo, Banana Boy!'));
console.log(reverse('A'));
console.log(reverse('AO'));
console.log(reverse('A O'));
console.log(reverse(0));