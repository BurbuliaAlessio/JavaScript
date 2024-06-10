const MAXAGE = 82;//const to define the max age - number
/**
 * calculates the amount consumed for rest 
 * of the life (based on a constant max age).
 * @param {number} age - your age
 * @param {number} amount - how much do you take in one day
 * @returns {number} amountInLife -  how much do you take in your life
 */
function calculateSupply(age, amount){
    let amountInLife = (MAXAGE - age)*amount;
    return amountInLife;
}

//-----------------------------------------------------------------------------------------------------------------------
//variables
let age1 = 21;//my personal age -number
let amount1 = 2;//How much coffee i take

//print on my html
document.getElementById("demo").innerHTML  = "You will need " + calculateSupply(age1, amount1) + " cups of coffee to last you until the age of " + MAXAGE;


//i print the message in the console
console.log("You will need " + calculateSupply(age1, amount1) + " cups of coffee to last you until the age of " + MAXAGE);
//-----------------------------------------------------------------------------------------------------------------------
