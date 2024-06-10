/**
 * @file: main.js
 * @author: Alessio Burbulia
 * 5.My setInterval
 * ● Pretend that setInterval() doesn't exist
 * ● Re-create it using setTimeout naming your function mySetInterval
 * ● Test your new function
 * ● Modify your function so that it automatically stops after 15 intervals
 */

/**
 * this fuction stabilize a 
 * interval to do a function
 * and stop 
 * @param {Function} funct 
 * @param {number} interval
 * @return {number} idTime - the id time of the function
*/
function mySetInterval(funct, interval) {
    let count;
    
    const callFunction = () => {
        funct();
        count ++;
        setTimeout(callFunction, interval);
    }
    
    setTimeout(callFunction(),interval);
}

// Example usage
mySetInterval(() => {
    console.log("Interval executed");
}, 3000);