/**
 * @file: main.js
 * @author: Alessio Burbulia
 * change the content of <p> and print 
 * on my console a message 
 */

//take a button and put in a variables
let btn = document.getElementById("translator");

/**
 * print the translation of "hello word" in other three languages
 * @param {lan} string - the value of my selection
 */
function translate(lan){
    let message;
    switch (lan) {
        case 'frances':
            message = "Bonjour mot";
        break;
        
        case 'espanol':
            message = "Hola Mundo";
        break;

        case 'portugues':
            message = "Olá Mundo";
        break;

        default:
            message = "HELLO WORLD";
    }
    document.getElementById("translate").innerHTML = message;
    console.log(message);
}

//build ad event when i press the button
btn.addEventListener("click", function(){
    //take the value of my selection
    lang = document.getElementById("languages").value;
    
    //call the function with the value of selection
    translate(lang);
})