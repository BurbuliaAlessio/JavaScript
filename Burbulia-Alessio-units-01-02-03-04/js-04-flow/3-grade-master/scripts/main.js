/**
 * @file: main.js
 * @author: Alessio Burbulia
 *  print on my console and
 * HTML a alfScore with a change score
 * decimal to "alfabetic(?)"
 * [i search but i really don't know]
 */

//take a button and put in a variables
let btn = document.getElementById("changer");
let valutation;

/**
 * print the change of "my alfScore" 
 * @param {lan} number - the value of my selection
 */
function assignGrade(val){
    //in scope assignGrade() variable
    let alfScore;

    switch (val) {
        case "2":
            alfScore = "F";
        break;
        
        case "3":
            alfScore = "E";
        break;

        case "4":
            alfScore = "E+";
        break;

        case "5":
            alfScore = "D-";
        break;

        case "6":
            alfScore = "D";
        break

        case "7":
            alfScore = "C";
        break

        case "8":
            alfScore = "B";
        break

        case "9":
            alfScore = "A";
        break

        case "10":
            alfScore = "A+";
        break
    }

    document.getElementById("valutation-changed").innerHTML = " the " + valutation + " in alpha score is " + alfScore;
    console.log(" the " + valutation + " in alpha score is " + alfScore);
}

//build ad event when i press the button
btn.addEventListener("click", function(){
    //take the value of my selection
    valutation = document.getElementById("number-score").value;

    //call the function with the value of selection
    assignGrade(valutation);
})