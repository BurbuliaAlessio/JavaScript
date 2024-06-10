/**
 * @file: main.js
 * @author: Alessio Burbulia
 * 
 * Create an array to hold your top choices (colors, pets, books, whatever).
 * For each choice, log to the screen a string like: "My #1 choice is blue."
 * 
 * Bonus: Change it to add the correct number suffix, e.g. "My 1st choice, "My 2nd
 * choice", "My 3rd choice", "My 4th choice", etc.
 */

//variable
//contain different type of animals
let animals = ['whale' , 'killer whale', 'dog', 'cat', 'duck'];

/**
 * perimise to primt a ramdom messagge 
 * about a animal in the array
 * @param {array} animals
 * @return {message} - a casual messages with my array value and index(+1)
*/
function printRandomAnMsg() {
    
    //variable 
    let isString = 0;//
    let message; //result

    for(let i = 0; i < animals.length; i++) {
        if(typeof animals[i] === 'string') {
            isString++;
        }
    }
    if (isString == (animals.length)) {
        i = Math.floor(Math.random() * animals.length);//casual index from 0 to array's length
        message = 'my #' + (i+1) + ' choise is ' + animals[i];
    }
    else
        message = 'the array don\'t contain only string';

    console.log(message);
}
printRandomAnMsg(animals);