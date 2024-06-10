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

function printWeekDay(){
    //today is a upperstring contain a current day
    const index = new Date().getDay();
    console.log(dayOfWeek)
    return dayOfWeek;
}

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