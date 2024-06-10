/**
 * @file: main.js
 * @author: Alessio Burbulia
 * 6.MixUp
 * ● Create a function called mixUp
 * ● It should take in two strings, and return the concatenation of the two strings (separated by a
 *   space) slicing out and swapping the first 2 characters of each
 * ● You can assume that the strings are at least 2 characters long
 *   
 * For example
 *   mixUp('mix', 'pod'): 'pox mid'
 *   mixUp('dog', 'dinner'): 'dig donner'
 */

/**
 * this function return a 
 * @param {string} str1 - the first string
 * @param {string} str2 - the second string
 * @return {string} result - a string with a swap first 2 
 * characters in str1 e str2 and a concatene of this two 
 * variables
*/
function mixUp(str1, str2){
    
    let result;//is here for 
    //! error control
    if(str1.length > 1 && str2.length > 1 && typeof str1 === 'string' && typeof str2 === 'string'){
        let arrayS1 = str1.split('');
        let arrayS2 = str2.split('');
        
        //first characters change
        let temp = arrayS1[0];
        arrayS1[0] = arrayS2[0];
        arrayS2[0] = temp;
        
        //second characters change
        temp = arrayS1[1];
        arrayS1[1] = arrayS2[1];
        arrayS2[1] = temp;

        let newS1 = '';
        let newS2 = '';

        for(let i = 0; i < str1.length; i++)
            newS1 = newS1.concat('', arrayS1[i]);//constructing a string

        for(let i = 0; i < str2.length; i++)
            newS2 = newS2.concat('', arrayS2[i]);//constructing a string

        result = newS2.concat(' ', newS1);
    }
    else
        result = 'mixUp() work with only string.length > 1';
    return result;

}

console.log(mixUp('cusshi', 'oissa'));
console.log(mixUp('A', 'A'));
console.log(mixUp(0, ''));
console.log(mixUp('', 0));