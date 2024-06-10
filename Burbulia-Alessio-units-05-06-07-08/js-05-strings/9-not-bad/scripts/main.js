/**
 * @file: main.js
 * @author: Alessio Burbulia
 * 
 * ● Create a function called notBad that takes a single argument, a string
 * ● It should find the first appearance of the substring 'not' and 'bad'
 * ● If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with
 *   'good' and return the result
 * ● If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original
 *   sentence
 *
 * For example
 * notBad('This dinner is not that bad!'): 'This dinner is good!'
 * notBad('This movie is not so bad!'): 'This movie is good!'
 * notBad('This dinner is bad!'): 'This dinner is bad!
*/

/**
 * permise to replace the 
 * sub string "not ... bad" with "good".
 * @param {string} str - a string
 * @return {string} str - a modify of a original str
*/
function notBad(str) {
    if(typeof str === 'string' && str.length > 6){//control for type
        
        notIndex = str.indexOf('not');// we control the position of 'not'
        badIndex = str.indexOf('bad');// and 'bad'

        if(notIndex < badIndex && notIndex >= 0 && badIndex >= 0)
            str = str.replace(/not(.+)bad/g, "good");
    }
    else
        str = "notBad() work with only string";
    return str

}

console.log(notBad('This dinner is not that bad!'));
console.log(notBad('This movie is not so bad!'));
console.log(notBad('This lunch is bad!'));
console.log(notBad('Is this bad or not?'));
console.log(notBad('not bad'));
console.log(notBad('no bad'));
console.log(notBad(0));