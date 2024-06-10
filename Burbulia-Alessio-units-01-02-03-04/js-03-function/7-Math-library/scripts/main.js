//variable
let number = 34;//a number needed to sqaure
let percentNum = 25;//the percent for function percentOf()

/**
 * calculate the square of a number
 * @param {number} num - a number
 * @returns {number} sqaure - sqaure of my number
 */
function squareNumber(num){
    let square = num * num;
    return square;
}

/**
 * calculate the devide of a number by 2
 * @param {number} num - a number
 * @returns {number} devide - devide of my number by 2
 */
function halfNumber(num){
    let divide = num / 2;
    return divide.toFixed(2);//only two digits after the decimal
}

/**
 * calculate the percent of a number
 * @param {number} num - a number
 * @param {number} percentNum - the percent num to calculate
 * @returns {number} percentRes - the percent of my number by percentNum
 */
function percentOf(percentNum, num){
    let percentRes = num * (percentNum/100);
    return percentRes.toFixed(2);//only two digits after the decimal
}

/**
 * calculate area of a circle by number
 * @param {number} radius - radius of my circle
 * @returns {number} area - area of my circle
 */
function areaOfCircle(radius){
    const pG = 3.14;//fanction scope for p greek - number
    let area = (radius * radius)*pG;
    return area.toFixed(2);//only two digits after the decimal
}


//print the message of the calcule on my html - SQAURE OF A NUMBER
document.getElementById("demo1").innerHTML = "The result of squaring the number " + number + " is " + squareNumber(number);
//print the message of the calcule on my console - SQUARE OF A NUMBER
console.log("The result of squaring the number " + number + " is " + squareNumber(number));


//print the message of the calcule on my html - HALF OF NUMBER
document.getElementById("demo2").innerHTML = "Half of " + number + " is " + halfNumber(number);
//print the message of the calcule on my console - HALF OF NUMBER
console.log("Half of " + number + " is " + halfNumber(number));


//print the message of the calcule on my html - PERCENT OF NUM
document.getElementById("demo3").innerHTML = percentOf(percentNum, number) + " is " + percentNum + "% of " + number;
//print the message of the calcule on my console - PERCENT OF NUM
console.log(percentOf(percentNum, number) + " is " + percentNum + "% of " + number);


//print the message of the calcule on my html - AREA CIRCLE
document.getElementById("demo4").innerHTML = "The area for a circle with radius " + number + " is " + areaOfCircle(number);
//print the message of the calcule on my console - AREA CIRCLE
console.log("The area for a circle with radius " + number + " is " + areaOfCircle(number));