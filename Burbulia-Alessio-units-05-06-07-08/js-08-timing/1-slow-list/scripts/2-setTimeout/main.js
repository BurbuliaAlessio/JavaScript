/**
 * @file: main.js
 * @author: Alessio Burbulia
 * 
 * 1.Slow list
 * ● Create an array that holds a list of 30 items (food, books, etc.)
 * ● Print one item of the list every second until the list is completely printed
 *   ○ Use setInterval to achieve this goal
 *   ○ Do the same thing using setTimeout
 */

//variables
//an array with casual things
let casualThings = ["apple", "banana", "chair", "table", "book", "pencil", "phone", "laptop", 
"bottle", "cup", "lamp", "notebook", "backpack", "keyboard", "mouse", 
"headphones", "shoe", "jacket", "watch", "wallet", "key", "pen", "glasses", 
"umbrella", "mirror", "clock", "cushion", "blanket", "towel", "brush"]
//a external index of array
let time = 0;
let index = 0;
/**
 * This function allows printing each 
 * element of an array at a pace of one element 
 * per second.
*/
const printElement = () => {
    if(index < casualThings.length){
        console.log(casualThings[index]);
        index++;
    }
    //stabilize a timeout
    setTimeout(printElement, 1000);
}

printElement();
