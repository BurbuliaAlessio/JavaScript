/**
 * @file: solution-5/main.js
 * @author: Alessio Burbulia
 * 
 * this file permise to change the 4th letter with "X"
 */

// /**
//  * this function separate 
//  * the string in a different 
//  * letter substring and change the 4th letter with 'X'
//  * @param {string} str - the string
//  * @return {string} result - return a modify string
// */
// const change4thLetter = (str) =>{
//     return str.replace(/(...)(.)/, '$1X');
// }
// console.log(change4thLetter('abracadabra'));


function perdiTempo(ms) {
    const start = Date.now();
    let intervall = Date.now() - start;
    while (intervall < ms) {
        intervall = Date.now() - start;
        Math.sqrt(Math.random());
    }
    console.log(`Ho perso tempo per ${ms} millisecondi!`);
  }
  perdiTempo(5000);
  console.log('finish');