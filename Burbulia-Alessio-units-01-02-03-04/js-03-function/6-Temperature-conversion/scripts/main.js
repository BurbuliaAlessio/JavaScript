//variable
const shift = 32;//shift for convertion of temeperature - {number}
let celsiusTemp = 27;//temperature in celsius
let fahrenheitTemp;//temperature in fahrenheit

/**
 * calculate and print fahrenheit conversion with celsius
 * @param {number} celsius - the temperature in celsius
 */
function celsiusToFahrenheit(celsius){
    fahrenheitTemp = (celsius*5/9)+shift;//formule to calculate fahrenheit
    //print on my html the farenaith temperature with a messagge - {string}
    document.getElementById("demo1").innerHTML  = celsius +  " °C  is " + fahrenheitTemp + " °F";
    //print on my console the farenaith temperature with a messagge - {string}
    console.log(celsius +  " °C  is " + fahrenheitTemp + " °F");
}

/**
 * calculate and print celsius conversion with fahrenheit
 * @param {number} fahrenheit - the temperature in fahrenheit
 */
function fahrenheitToCelsius(fahrenheit){
    celsiusTemp = (fahrenheit - shift) * 9/5;//formule to calculate celsius
    //print on my html the farenaith with a messagge - {string}
    document.getElementById("demo2").innerHTML  = fahrenheit +  " °F  is " + celsiusTemp + " °C";
    //print on my console the circumference with a messagge - {string}
    console.log(fahrenheit +  " °F  is " + celsiusTemp + " °C");
}

//call my first convesion and print celsiusToFahrenheit()
celsiusToFahrenheit(celsiusTemp);

//call my second convesion and print fahrenheitToCelsius()
fahrenheitToCelsius(fahrenheitTemp);