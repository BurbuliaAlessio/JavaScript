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
* ● Bonuses
*   ○ Add a random reward for correct guesses and subtract a random amount for failed
*     guesses.
*   ○ Show the user the total reward 
*     (positive or negative).
*   ○ Draw a hangman image to the console log 
*     after each guess.
*   ○ Add a function that generates the letters 
*     to guess randomly.
*   ○ Add a function that chooses the initial 
*     word to guess from an array of words.
*/
//variable
let word; //generate with randomWord
let attempts = 6;//the program work correctly with 6 attempts
let arrayWord;
let arrayYourTry;//contain your letter try
let point = 0;
let pointStatus = false;

word = randomWord();

if(typeof(word) !== 'string')
    console.log('your word is not a string')

//array with upper letter of my word
arrayWord = word.toUpperCase().split('');
//array with n number of underScore
arrayYourTry = underSlengthWord(word).split('  ');

/**
* put a casual string value of 100 string in my 
* variable word 
* @return {string} words[i] - one of 100 casual string 
*/
function randomWord() {
    let words = [
        "apple", "banana", "orange", "grape", "strawberry", "pineapple", "watermelon", "blueberry", "kiwi", "peach",
        "mango", "pear", "plum", "cherry", "raspberry", "blackberry", "lemon", "lime", "coconut", "apricot",
        "avocado", "fig", "guava", "papaya", "passionfruit", "dragonfruit", "lychee", "pomegranate", "tangerine", "cantaloupe",
        "honeydew", "grapefruit", "clementine", "nectarine", "boysenberry", "cranberry", "gooseberry", "kiwifruit", "persimmon", "quince",
        "starfruit", "mulberry", "elderberry", "acai", "rhubarb", "kumquat", "plantain", "date", "coconut", "jackfruit",
        "durian", "breadfruit", "loquat", "lychee", "longan", "ugli fruit", "soursop", "breadnut", "cherimoya", "sapodilla",
        "custard apple", "pawpaw", "kiwano", "horned melon", "tamarillo", "feijoa", "rambutan", "ackee", "quandong", "salak",
        "chayote", "sugarapple", "santol", "jabuticaba", "cupuacu", "durian", "mangosteen", "gojiberry", "persimmon", "mangaba",
        "rambutan", "mameysapote", "noni", "tamarind", "blackcurrant", "bilberry", "boysenberry", "redcurrant", "white currant", "elderberry",
        "cloudberry", "lingonberry", "cloudberry", "marionberry", "boysenberry", "tayberry", "lingonberry", "salmonberry", "strawberry", "tayberry"
    ];
    let i = Math.floor(Math.random() * 100);
    return words[i];
}

/**
* generate a casual number from 1 to 15
* and add if the user guess the number
* or substruct if he don't guess
* @param {boolean} pointStatus - false = lose point| true = add point
*/
function pointGen(){
    let randomM = Math.floor(Math.random() * 15) + 1;
    if (pointStatus === true){
        console.log('you have acquired ' + randomM + ' points');
        point = point + randomM;
    }
    else{
        console.log('you lost ' + randomM + ' points');
        point = point - randomM;
    }    
}

/**
* generate a hanghuman and print on console
* based on the number of attempts with a switch case
* @param {number} attempts - attempts
*/
function printHangHuman(attempts){
    let hangman = '';
    switch (attempts) {
        case 6:
            hangman += "  +---+\n";
            hangman += "  |   |\n";
            hangman += "      |\n";
            hangman += "      |\n";
            hangman += "      |\n";
            hangman += "      |\n";
            hangman += "=========\n";
        break;
        
        case 5:
            hangman += "  +---+\n";
            hangman += "  |   |\n";
            hangman += "  O   |\n";
            hangman += "      |\n";
            hangman += "      |\n";
            hangman += "      |\n";
            hangman += "=========\n";
        break;
        
        case 4:
            hangman += "  +---+\n";
            hangman += "  |   |\n";
            hangman += "  O   |\n";
            hangman += "  |   |\n";
            hangman += "      |\n";
            hangman += "      |\n";
            hangman += "=========\n";
        break;
        
        case 3:
            hangman += "  +---+\n";
            hangman += "  |   |\n";
            hangman += "  O   |\n";
            hangman += " /|   |\n";
            hangman += "      |\n";
            hangman += "      |\n";
            hangman += "=========\n";
        break;
        case 2:
            hangman += "  +---+\n";
            hangman += "  |   |\n";
            hangman += "  O   |\n";
            hangman += " /|\\  |\n";
            hangman += "      |\n";
            hangman += "      |\n";
            hangman += "=========\n";
        break;
        
        case 1:
            hangman += "  +---+\n";
            hangman += "  |   |\n";
            hangman += "  O   |\n";
            hangman += " /|\\  |\n";
            hangman += " /    |\n";
            hangman += "      |\n";
            hangman += "=========\n";
        break;
        
        case 0:
            hangman += "  +---+\n";
            hangman += "  |   |\n";
            hangman += "  O   |\n";
            hangman += " /|\\  |\n";
            hangman += " / \\  |\n";
            hangman += "      |\n";
            hangman += "=========\n";
        break;
    }
    console.log(hangman);
}


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
                pointStatus = true;
                pointGen(pointStatus);
                message = 'good, go ahead';
                arrayYourTry[i] = arrayWord[i];
                printHangHuman(attempts);
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
                pointStatus = false;
                pointGen(pointStatus);
                attempts--;
                printHangHuman(attempts);
                message = 'try again, you have ' + attempts + ' chance';    
            }
            
            if (attempts <= 0) {//if attempts is 0 or sub your lose
                pointStatus = false;
                pointGen(pointStatus);
                printHangHuman(attempts);
                message = 'you lose';
                messageWordG = 'the word was ' + word;
            }
        }
        else{
            pointStatus = true;
            printHangHuman(attempts);
            pointGen(pointStatus);
            message = 'you win';
        }
    }
    else{
        pointStatus = false;
        printHangHuman(attempts);
        pointGen(pointStatus);
        attempts--;
        message = 'you not insert a letter, you have ' + attempts + ' chance';
    }
    console.log(message);
    console.log('now you have ' + point + ' points');
    console.log(messageWordG);
}

guessLetter('a');
guessLetter('l');
guessLetter('e');
guessLetter('s');
guessLetter('o');
guessLetter('e');