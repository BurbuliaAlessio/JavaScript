/**
 * @file: main.js
 * @author: Alessio Burbulia
 * Select tow number like 4 input elements 
 */

let btn = document.getElementById("button");

/**
 * calculate the biggest num like 2 number
 * @param {number} num1 - first number
 * @param {number} num2 - second number
 * @returns {number} biggest - the biggest number
 */
function greaterNum(num1, num2){
    let biggest;
    if (num1 >= num2)
        biggest = num1;
    else
        biggest = num2;
    return biggest;
}

/**
 * emptyout my input in my form
 */
function emptyOutinput(){
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("third-number").value = "";
    document.getElementById("fourth-number").value = "";
}

//on press the button in my form on html
btn.addEventListener("click", function (){
    //variable
    let num1 = document.getElementById("first-number").value;
    let num2 = document.getElementById("second-number").value;
    let num3 = document.getElementById("third-number").value;
    let num4 = document.getElementById("fourth-number").value;

    //execute greaterNum()
    let biggest1 = greaterNum((num1), (num2));
    //second call
    let biggest2 = greaterNum((num3), (num4));

    //print on my html a message concatenate to biggest1
        document.getElementById("first-call").innerHTML = "The greater number of " + num1 + " and " + num2 + " is " + biggest1;
    //print on my console a message concatenate to biggest1
        console.log("The greater number of " + num1 + " and " + num2 + " is " + biggest1);
    
    //print on my html a message concatenate to biggest2
        document.getElementById("second-call").innerHTML ="The greater number of " + num3 + " and " + num4 + " is " + biggest2;
    //print on my console a message concatenate to biggest2
        console.log("The greater number of " + num3 + " and " + num4 + " is " + biggest2);

    emptyOutinput()
})