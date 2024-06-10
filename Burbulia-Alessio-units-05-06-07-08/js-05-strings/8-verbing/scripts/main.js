/**
 * @file: main.js
 * @author: Alessio Burbulia
 * 
 * project: 8.Verbing
 * ● Create a function called verbing
 * ● It should take a single argument, a string. If its length is at least 3, it should add 'ing' to
 *   its end, unless it already ends in 'ing', in which case it should add 'ly' instead
 * ● If the string length is less than 3, it should leave it unchanged
 * 
 * For example
 * verbing('swim'): 'swimming'
 * verbing('swimming'): 'swimmingly'
 * verbing('go'): 'go'
 */


/**
 * that function perimse to change 
 * the verb with the form in -ing
 * but don't change the form when 
 * have 3 letters or less, and if 
 * that a vrb with -ing form concat 
 * -ly at the finish
 * @param {string} verb - that a verb
 * @return {string} verb - the verb with the appropriate form
*/
function verbing(verb){
    let correctlyVerb = verb;//result
    if(typeof verb === 'string' && verb.length > 1){
        if (verb.length >= 3){
            if(verb.indexOf("ing") > 0)
                correctlyVerb = verb + 'ly';
            else
                correctlyVerb = verb + 'ing';
        }
    }
    else
        correctlyVerb = 'verbing() work with only string.length > 1';
    return correctlyVerb;
}

console.log(verbing("go"));
console.log(verbing("work"));
console.log(verbing("loving"));
console.log(verbing(0));
console.log(verbing("A"));