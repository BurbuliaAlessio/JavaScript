/**
 * @file: main.js
 * @author: Alessio Burbulia
 * 2.Oh no you don’t
 * ● Write a function “useful” that does something useful in Javascript
 * ● Schedule it to run after 10 seconds
 * ● Write another function that cancels the scheduling of the first function
 * ● Use the second function to cancel the first one after 5 seconds and output
 *   ‘function cancelled’ to the console
 */

/**
 * This function allows to print a current date
 */
const useful = () =>{
    let currentDate = new Date();
    console.log(currentDate);
}

/**
 * This function allows to stop the function usefull()
 */
const stopUseful = () => {
    clearTimeout(timeOutID);
    console.log('function cancelled');
}

const timeOutID = setTimeout(useful, 10000);
setTimeout(stopUseful, 5000);