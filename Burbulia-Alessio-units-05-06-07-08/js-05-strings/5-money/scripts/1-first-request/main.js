/**
 * @file: main.js
 * @author: Alessio Burbulia
 * 
 * 5 Money
 * Create a function called Money
 * It should take a single argument, an amount, and return 'amount dollars'
 * Add a smiley at the end if the amount is 1 million. Deal with edge cases
 * For example
 * Money(1): 10 dollar;
 * Money(10): 10 dollars;
 * Money(1000000): 1000000 dollars;
 * Bonus add to the function the ability to convert dollars to euros Money(10): 10 dollars are 9.31 euros
 */

/**
 * this function return a dollar amount, 
 * starting from a number
 * @param {number} n - a number
 * @return {string} n + 'dollars' - the amount in dollar
*/
let money = (n) => {
    let amount;//result
    if (typeof n === 'number' && n >= 0)//!control
        amount = n + ' dollars';

        if (n === 1000000) // Aggiunta di un smiley se l'importo è 1 milione
        amount += ' 😊';
    else
        amount = 'money() work with only number >= 0';
    return amount;
};
console.log(money(100));
console.log(money(-1));
console.log(money('100'));
console.log(money('A'));
console.log(money(''));
