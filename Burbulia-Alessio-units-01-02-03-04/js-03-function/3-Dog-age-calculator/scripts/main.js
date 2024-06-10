/**
 * calculate a dog age with human age
 * @param {number} humanAge -  
 * @returns {number} dogAge -  a dog age, starting with human age
 */
function calculateDogAge(humanAge){
    dogAge = humanAge/7;
    return dogAge;
}

//-------------------------------------------------------------------------------------------------------------------
//variable
let humanAge = 50;//human age - number

document.getElementById("demo").innerHTML  = "Your dog is " + calculateDogAge(humanAge) + " years old in dog years!";
//i print the message in the console
console.log("Your dog is", calculateDogAge(humanAge),  "years old in dog years!");
//-------------------------------------------------------------------------------------------------------------------