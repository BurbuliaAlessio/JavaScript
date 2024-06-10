/**
 * @file: main.js
 * @author: Alessio Burbulia
 * 
 * 6.Date ago
 * ● Create a function getDateAgo(date, days) that returns the day of the month 
 *   n days ago from the given date
 * ● For instance, if today is the 20th, then getDateAgo(new Date(), 1) should be 
 *   19th and getDateAgo(new Date(), 2) should be 18th
 * ● Test the function to make sure it works reliably with any valid Date object
 * ● Decide what to do with a negative 'days' parameter
 *   ○ e.g. getDateAgo(new Date(), -2
*/

/**
 * this function allows to return a past day of the
 * mounth starting a date
 * @param {Date} date - a date to starting
 * @param {number} days - how much back days of the dte
 * @return {num} 
*/
function getDateAgo(date, days) {
    let currentDay = date.toISOString().substring();
    console.log(currentDay);
}