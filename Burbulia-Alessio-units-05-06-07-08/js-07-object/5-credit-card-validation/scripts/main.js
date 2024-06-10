/**
 * @file: main.js
 * @author: Alessio Burbulia
 * 
 * @description:
 * ● Write a function called “validateCreditCard” that checks credit card
 *   numbers according to the following rules:
 * ○ Number must be 16 digits, all of them must be numbers
 * ○ You must have at least two different digits represented (all of the digits cannot be the same)
 * ○ The final digit must be even
 * ○ The sum of all the digits must be greater than 16
 * 
 * ● The following credit card numbers are valid:
 * ○ 9999-9999-8888-0000
 * ○ 6666-6666-6666-1666
 * ● The following credit card numbers are invalid:
 * ○ a923-3211-9c01-1112 invalid characters
 * ○ 4444-4444-4444-4444 only one type of number
 * ○ 1111-1111-1111-1110 sum less than 16
 * ○ 6666-6666-6666-6661 odd final number
 * ● Hint
 * ○ Remove the dash '-' from the input string before checking 
 * if the input credit card number is valid.
 * 
 * Call the function with several credit card numbers:
 * validateCreditCard('9999-9999-8888-0000');
 * validateCreditCard('4444-4444-4444-4444');
 * validateCreditCard('6666-6666-6666-1666');
 * The function returns an object saying that the credit card is valid, or what the error is:
 * { valid: true, number: '9999-9999-8888-0000' }
 * { valid: false, number: 'a923-3211-9c01-1112', error: 'wrong_length' }
 * For each card check, print out the result to the log in this format:
 *
 * ================================
 * = number : a923-3211-9c01-1112 =
 * = valid : false =
 * = error : wrong length =
 * ================================
*/

const creditCard1 = {
    numberCard : '6325 - 6452 - v4nu - enu3',
    isValid : false,//boolean     
    error : {            
            errorNO : 'NO ERROR', 
            error01 : 'invalid characters',
            error02 : 'sum less than 16 or length != 16',
            error03 : 'odd final number',
            error04 : 'only one type of number'
        }
};

const creditCard2 = {
    numberCard : '6666 - 6666 - 6666 - 6666',
    isValid : false,//boolean     
    error : {
            errorNO : 'NO ERROR', 
            error01 : 'invalid characters',
            error02 : 'sum less than 16 or length != 16',
            error03 : 'odd final number',
            error04 : 'only one type of number'
        }
};

const creditCard3 = {
    numberCard : '1111 - 1100 - 1111 - 1112',
    isValid : false,//boolean    
    error : {

            error01 : 'invalid characters',
            error02 : 'sum less than 16 or length != 16',
            error03 : 'odd final number',
            error04 : 'only one type of number'
        }
};

const creditCard4 = {
    numberCard : '6385 - 5365 - 5643 - 4543',
    isValid : false,//boolean     
    error : {
            errorNO : 'NO ERROR', 
            error01 : 'invalid characters',
            error02 : 'sum less than 16 or length != 16',
            error03 : 'odd final number',
            error04 : 'only one type of number'
        }
};

const creditCard5 = {
    numberCard : '0385 - 0365 - 5603 - 45',
    isValid : false,//boolean     
    error : {
            errorNO : 'NO ERROR', 
            error01 : 'invalid characters or length != 16',
            error02 : 'sum less than 16',
            error03 : 'odd final number',
            error04 : 'only one type of number'
        }
};

const creditCard6 = {
    numberCard : '0385 - 0365 - 5603 - 4525',
    isValid : false,//boolean     
    error : {
            errorNO : 'NO ERROR', 
            error01 : 'invalid characters or length != 16',
            error02 : 'sum less than 16',
            error03 : 'odd final number',
            error04 : 'only one type of number'
        }
};

/**
 * this function convert in array with one substring with 
 * a number of a the credit card
 * @param {Object} numberCard - the number (16 numbers) of my credit card
 * @return {Array} array - array with the number of creditCard
*/
    function convertToArrayCreditCard(numberCard){

    //variable
        let n;//string with only number
        let array = [];//array contain the substring of number

    //!control
        if(typeof numberCard === 'string')

            n = numberCard.replace(/\s- /g, '');//string with only number
            n = n.replace(/[aA-zZ]/g, 'X');//string with only number

        for (let i = 0; i < n.length; i++)
            array[i] = n.charAt(i);
        
        return array;
    }

/**
 * this function return a boolean value:
 * 
 * if is true: the number is valid,
 * if is false: the number is not valid
 * 
 * @param {Object} arrayNC - array of numberCard
 * @return {Boolean} isValid
*/
    function isValidCharacters(arrayNC){
        let notNumber = 0;// count the no numbers
        let isValid;
        
        for (let i = 0; i < arrayNC.length; i++)
            if(arrayNC[i] ==  'X')//! 'X' is not valid digit
                notNumber++; //count the not valid digits

        if(notNumber == 0) //if is not invalid digits
            isValid = true;//return true
        else
            isValid = false;
        return isValid;
    }

/**
 * this function convert the string into array in type Number and 
 * return the sum
 * @param {Object} arrayNC - array of numberCard
 * @return {Number} result - the sum of every Number
*/
    function sumOfCreditCard(arrayNC){
        let result = 0;

        for (let i = 0; i < arrayNC.length; i++)
            result += parseInt(arrayNC[i]);
        return result;
    }
    
/**
 * this function control the last digit,
 * if is even return true
 * else return false
 * @param {Object} arrayNC - array of numberCard
 * @return {Boolean} isValid
*/
    function isLastNumberEven(arrayNC){
        let isValid;
        let lastDigit = arrayNC.length - 1;//the last element into the array
        if (arrayNC[lastDigit] % 2 == 0)//!control the last char isn't odd
            isValid = true;
        else
            isValid = false;
        return isValid;
    }

/**
 * this function control the if is only one 
 * type of number in the digits
 * @param {Object} arrayNC - array of numberCard
 * @return {Boolean} isValid
 * @example 
 * 9999999999 = false
 * 9999999992 = true
*/
    function isOnlyOneTypeOfNumber(arrayNC){
        let isValid;
        for (let i = 1; i < arrayNC.length; i++){
                if(arrayNC[i] != arrayNC[0])//control the firs char with every char into array
                    isValid = true;
                else
                    isValid = false;
        }
        return isValid;
    }

/**
 * this function validate the number of card
 * @param {Object} creditCard - my credit card
*/
    function validateCreditCard(creditCard){
    let indexError = 'NO';
    //convert the numberCard string into array
        let arrayNC = convertToArrayCreditCard(creditCard.numberCard);
        isValidCN = isValidCharacters(arrayNC); //contain only number?

        if(isValidCN && arrayNC.length == 16){ //!control is valid characters and 
            
            let sumOfNC = sumOfCreditCard(arrayNC); //the sum of the number into Cr Crd
            if(sumOfNC >= 16){ //!control the sum of digits is more than 16
                
                let isLeven = isLastNumberEven(arrayNC); //true: the-last-digits-is-even false:the-last-digits-is-odd  
                if(isLeven){ //!control of last char
                    
                    let isOneType = isOnlyOneTypeOfNumber(arrayNC); //at least two types of digits
                    if(isOneType) //!control is not only occurrences
                        creditCard.isValid = true;
                    else
                        indexError = '04';
                }
                else
                    indexError = '03';
            }
            else
                indexError = '02';
    }
    else
        indexError = '01';
    return indexError;      
}

/**
 * this function print the data card
 * @param {Object} creditCard - my credit card
*/
function printDataCard(creditCard){
    indexError = validateCreditCard(creditCard);//return a index of a error
    console.log(`
    =========================================
    = number-card:   ${creditCard.numberCard}
    = valide:        ${creditCard.isValid}
    = error:         ${creditCard.error['error' + indexError]}
    =========================================
    `);
}
printDataCard(creditCard1);
printDataCard(creditCard2);
printDataCard(creditCard3);
printDataCard(creditCard4);
printDataCard(creditCard5);
printDataCard(creditCard6);