/**
 * A concatenate of my data and other string
 * @param {number} n - number of sons
 * @param {string} z - Name of partner
 * @param {string} y - position fo my fortune 
 * @param {string} x - my personal job title 
 * @returns {string} fortune -  a concatenate of my data and other string
 */
function TellFotune(x, y, z, n){
    let fortune = "You will be a " + x + " in " + y + ", and married to " + z + " with " + n + " kids.";
    return fortune;
}

//------------------------------------------------------------------------------------------------------
//first call
let n1 = 3;//number of sons - number
let z1 = "Marie";//Name of partner - string
let y1 = "Amsterdam";//position fo my fortune - string
let x1 = "ingeneer";//my personal job title
//first call with id in my HTML
document.getElementById("demo1").innerHTML  = TellFotune(x1, y1, z1, n1);
//i print the first message in my console withouth saving
console.log(TellFotune(x1, y1, z1, n1));

//second call
n1 = 2;//number of sons - number
z1 = "Gianni";//Name of partner - string
y1 = "New York";//position fo my fortune - string
x1 = "doctor";//my personal job title
//second call with id in my HTML
document.getElementById("demo2").innerHTML  = TellFotune(x1, y1, z1, n1);
//i print the second message in my console withouth saving
console.log(TellFotune(x1, y1, z1, n1));

//third call
n1 = 11;//number of sons - number
z1 = "Antonia";//Name of partner - string
y1 = "Bahamas";//position fo my fortune - string
x1 = "lawyer";//my personal job title
//third call with id in my HTM
document.getElementById("demo3").innerHTML  = TellFotune(x1, y1, z1, n1);
//i print the third message in my console withouth saving
console.log(TellFotune(x1, y1, z1, n1));
//-------------------------------------------------------------------------------------------------