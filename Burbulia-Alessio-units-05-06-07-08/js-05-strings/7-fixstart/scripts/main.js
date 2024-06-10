/**
 * @file: main.js
 * @author: Alessio Burbulia
 * 7.FixStart
 * ● Create a function called fixStart
 * ● It should take a single argument, a string, 
 *   and return a version where all occurrences of its
 *   first character have been replaced with '*', 
 *   except for the first character itself
 * ● You can assume that the string is at least one 
 *   character long
 */
/**
 * a censure of my str.
 * I divide in trhee equal part and put 
 * in center part the '*'
 * @param {string} str - a string 
 * @return {string} result - a censure of my str
*/
function fixStart(str){
    let result;
    if(str.length == 1){//! error control
        result = '*';
    }
    else{
        if (str.length > 1 && typeof str === 'string'){//! error control
            //divide in three my string length
            let subLength = (str.length/3);//long of my censure zone
            if(subLength%3 != 0)
                subLength - 1;
            subLength = subLength.toFixed(0);
            let censure = '';//inizializate of my censure
            for (let i = 0; i < subLength; i++){
                censure = '*' + censure;//create a censure
            }
                result = str.substring(0, subLength);
                result = result.concat(censure, '');
                subLength = subLength*2;//change the index and start at the finish of censure
                result = result.concat(str.substring(subLength, str.length), '');
        }
        else//str length < 1
            result = 'fixStart() work with only string.length > 1';
    }
    return result;
}

console.log(fixStart('vjirn33iogomi'));
console.log(fixStart('A'));
console.log(fixStart(''));
console.log(fixStart(0));