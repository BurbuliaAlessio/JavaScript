/**
 * @file: main.js
 * @author: Alessio Burbulia
 * 11.The group
 * ● Use the previous function to write another function called group that checks whether a string is
 * part of another longer string that is a list of names of a group
 * The function should output the results to the console
 * 
 * let group = "Mary, James, and John";
 * let oldGuy = "James";
 *  Outputs: "James IS part of the group"
 * let newGuy = "Philip";
 *  Outputs: "Philip is NOT part of the group"
 */

/**
 * this function return a feedback message
 * of relation of people and person.
 * if people cotain the person print
 * '... is part of the group' else
 * '... is NOT part of the group'
 * @param {string} people - a string
 * @param {string} person - a string
 * @return {boolean} isInGroup - a message
*/
function group(people, person) {
    let isInGroup;//result

    if(typeof people === 'string' && typeof person === 'string' && people.length > person.length){
        index = people.indexOf(person);
        if (index !== -1)//when the index is -1 or is not number type it don't found the subString
            isInGroup = person + ' is part of the group';
        else
            isInGroup = person + ' is NOT part of the group';
        }
    else
        isInGroup = 'group() work with only string people.length > string person.length';    
    return isInGroup;
}

console.log(group("Mary, James, and John", "James"));
console.log(group("Mary, James, and John", "Philip"));
console.log(group(0));