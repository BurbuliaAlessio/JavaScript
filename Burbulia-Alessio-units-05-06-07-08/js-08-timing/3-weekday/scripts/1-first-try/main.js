/**
* @file: main.js
* @author: Alessio Burbulia
* 
* 3.Weekday
* ● Write a function getWeekDay(date) to show the weekday in short format:
*   ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’
* ● Write another function that does the same in Italian
* ● Add a language parameter to the function that accepts ‘en’ or ‘it’ and
* outputs the day in the correct language
*/

/**
* This function print and return the current week day in
* english
* @return {string} dayOfWeek - current day of the week
*/
function printWeekDay(){
    //today is a upperstring contain a current day
    const today = new Date().toUTCString().toUpperCase();
    //selected the only first two char
    let dayOfWeek = today.substring(0, 2);
    console.log(dayOfWeek)
    return dayOfWeek;
}

/**
* This function print and return the current week day in
* italian, and comunicate the error print in italian
* @return {string} dayOfWeek - current day of the week
*/
function stampaGiornoSettimana(){
    //today is a upperstring contain a current day
    const today = new Date().toUTCString().toUpperCase();
    //selected the only first two char
    let dayOfWeek = today.substring(0, 2);
    
    switch (dayOfWeek) {
        case 'MO':
        dayOfWeek = 'LU';
        break;
        
        case 'TU':
        dayOfWeek = 'MA';
        break;
        
        case 'WE':
        dayOfWeek = 'ME';
        break;
        
        case 'TH':
        dayOfWeek = 'GI';
        break;
        
        case 'FR':
        dayOfWeek = 'VE';
        
        break;
        
        case 'SA':
        dayOfWeek = 'SA';
        break;
        
        case 'SU':
        dayOfWeek = 'SU';
        break;
        
        default:
        console.log('ERROR')
        break;
    }
    console.log(dayOfWeek);
    return dayOfWeek;
}

/**
* This function permise 
* to print the current day 
* of the week
* @param {string}     lang - stibilize the output language
*/
const getWeekDay = (lang) =>{
    switch (lang) {
        case 'en':
        printWeekDay();
        break;
        case 'it':
        stampaGiornoSettimana();
        break;
        
        default:
        console.log('Yout not  put a correct language [\'it\' - \'en\']')
        break;
    }
}
getWeekDay('en');
getWeekDay('it');
getWeekDay('du');