/**
 * @file: main.js
 * @author: Alessio Burbulia
 * 
 * 5 Money
 *
 ** Bonus add to the function the ability to convert dollars to euros Money(10): 10 dollars are 9.31 euros
 */

/**
 * this function return a euros amount, 
 * starting from a string
 * sostitute a string with a substring with only number char
 * @param {number} n - a number
 * @return {string} number + "euros"
*/
function money(n){
    let euroAmount;//result
    if (typeof n === 'number' && n >= 0){//control
        let dollarAmount = n + ' dollars';
        dollarAmount = dollarAmount.replace(/ [A-Za-z]\w+/g, '');//sostitute every words and front 'space' with ('')
        dollarAmount/*typeOf = string*/ = +dollarAmount//now is type number
        euroAmount = (dollarAmount * 0.931/* exchange tax */) + " euros";
    }
    else
        euroAmount = 'money() work with only number >= 0';
    return euroAmount;
}
console.log(money(100));
console.log(money(-1));
console.log(money('100'));
console.log(money('A'));
console.log(money(''));