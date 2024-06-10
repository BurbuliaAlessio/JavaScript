//variables
let temperature = 10.000000000000004;//temperature in celsius
const shift = 32;
let fahrenheit = (temperature*5/9)+shift;//formule to calculate fahrenheit
let celsius = (fahrenheit - shift) * 9/5;
                                                                          
document.getElementById("output1").innerHTML = temperature + "°C is " + fahrenheit + "in °F";
document.getElementById("output2").innerHTML = fahrenheit + "°F is " + celsius + "in °C";

