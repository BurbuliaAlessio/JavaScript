/**
* @file: main.js
* @author: Alessio Burbulia
* 2.Word Guesser
* ● Create two arrays:
*   ○ one for the letters of the word (e.g. 'C', 'A', 'T')
*   ○ Another for the current guessed letters (start with '_', '_', '_' and add the correct letters to it).
* ● Write a function called guessLetter that should:
*   ○ Take one argument, a letter.
*   ○ Have a maximum number of guesses (e.g. 6)
*   ○ Check if the letter is in the word array.
*   ○ If the letter matches, add it in the correct position of the guessed array.
*   ○ Show the user the current guessed letters.
*   ○ Tell the user if they guessed a correct letter.
*   ○ Tell the user how many guesses remain.
*   ○ Tell the user if they won or lost the game.
* Continues on next page >>>
* 16
* 2.Word Guesser
* Call your function to make guesses:
* guessLetter('G');
* guessLetter('I');
* guessLetter('O');
* guessLetter('A');
* guessLetter('T');
*/
//variable
let word = 'alessio';
let tentative = 6;
let arrayWord;
let arrayYourTry;


if(typeof(word) !== 'string')
    console.log('your word is not a string')

//array with upper letter of my word
arrayWord = word.toUpperCase().split('');
//array with n number of underScore
arrayYourTry = underSlengthWord(word).split('  ');

/**
* returns string.length number of 
* underscore in a string divided by a space
* @param {string} string - a word
* @return {string} underScore - a string with n underscore divided by a space
*/
function underSlengthWord(string) {
    let underScores = '';
    
    for(let i = 0; i < string.length; i++)
        underScores = underScores + ' _ ';
    return underScores.trim();
}

/**
* this function search a letter in my arrayWord
* @param {string} letter - is a string with a only one letter
* @return {} 
*/
function guessLetter(letter) {
    
    //result variable
    let message = '';
    let messageWordG = '';
    
    //!control of my param
    if(typeof letter === 'string' && letter.length == 1) {
        
        //work variable
        letter = letter.toUpperCase();
        let flag = 0;
        let nUnderScore = 0;
        
        for(let i = 0; i < arrayWord.length; i++) {
            //search the letter
            if (arrayWord[i] == letter && letter != arrayYourTry[i]) {
                message = 'good, go ahead';
                arrayYourTry[i] = arrayWord[i];
                flag++;
            }
            //contruct my message word
            messageWordG = messageWordG + arrayYourTry[i] + ' ';
            
            //!control
            if(arrayYourTry[i] == '_')
                nUnderScore++//count the underscore
        }
        
        //print message
        if(nUnderScore > 0){//if we have underscore in the word
            
            if (flag == 0) {//if flg is zero, no letters were found
                tentative--;  
                message = 'try again, you have ' + tentative + ' chance';    
            }
            
            if (tentative <= 0) {//if tentative is 0 or sub your lose
                message = 'you lose';
                messageWordG = 'the word was ' + word;
            }
        }
        else
        message = 'you win';
    }
    else{
        tentative--;
        message = 'you not insert a letter, you have ' + tentative + ' chance';
    }
    console.log(message);
    console.log(messageWordG);
}

guessLetter('a');
guessLetter('l');
guessLetter('e');
guessLetter('s');
guessLetter('o');
guessLetter('e');
guessLetter('a');
guessLetter('l');
guessLetter('e');
guessLetter('s');
guessLetter('o');
guessLetter('e');