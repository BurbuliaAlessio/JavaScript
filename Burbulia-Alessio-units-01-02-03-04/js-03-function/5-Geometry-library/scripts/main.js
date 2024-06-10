//this de pi greek - const
const pG = 3.14;

/**
 * calculate and return the circumfrence with a radius 
 * and pG{global const}
 * @param {number} r - the radius
 * @returns {number} circumfrence -  the circumfrence ofmy circle
 */
function calcCircumfrence(r){
    let circumfrence = (2*r)*pG;
    return circumfrence;
}


/**
 * calculate and return the area with a 
 * radius and pG{global const}
 * @param {number} r - the radius
 * @returns {number} area -  the area ofmy circle
 */
function calcArea(r){
    let area = (r*r)*pG;
    return area;
}

//-----------------------------------------------------------------------------------------
let r = 4;//radius of the circle {number}

//print on my html the circumference with a messagge - {string}
document.getElementById("demo1").innerHTML  = "The circumference is " + calcCircumfrence(r);

//print on my html the area with a message - {string}
document.getElementById("demo2").innerHTML  = "The area is " + calcArea(r);


//print on my console the circumference with a messagge - {string}
console.log("The circumference is " + calcCircumfrence(r));

//print on my console the area with a message - {string}
console.log("The circumference is " + calcArea(r));
//-------------------------------------------------------------------------------------------
