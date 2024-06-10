### Credit Card Validation

#### Function: `convertToArrayCreditCard`
1. **Description:**
   - Convert the credit card number string into an array with individual digits.
   
2. **Parameters:**
   - `numberCard`: The credit card number as a string.
   
3. **Return Value:**
   - An array containing individual digits of the credit card number.

#### Function: `isValidCharacters`
4. **Description:**
   - Check if all characters in the credit card number are valid digits.
   
5. **Parameters:**
   - `arrayNC`: An array of individual digits of the credit card number.
   
6. **Return Value:**
   - `true` if all characters are valid digits, `false` otherwise.

#### Function: `sumOfCreditCard`
7. **Description:**
   - Calculate the sum of all digits in the credit card number.
   
8. **Parameters:**
   - `arrayNC`: An array of individual digits of the credit card number.
   
9. **Return Value:**
   - The sum of all digits in the credit card number.

#### Function: `isLastNumberEven`
10. **Description:**
    - Check if the last digit of the credit card number is even.
    
11. **Parameters:**
    - `arrayNC`: An array of individual digits of the credit card number.
    
12. **Return Value:**
    - `true` if the last digit is even, `false` otherwise.

#### Function: `isOnlyOneTypeOfNumber`
13. **Description:**
    - Check if there is only one type of number in the credit card digits.
    
14. **Parameters:**
    - `arrayNC`: An array of individual digits of the credit card number.
    
15. **Return Value:**
    - `true` if there is more than one type of digit, `false` otherwise.

#### Function: `validateCreditCard`
16. **Description:**
    - Validate the credit card number based on various criteria.
    
17. **Parameters:**
    - `creditCard`: An object representing the credit card with the number to be validated.
    
18. **Return Value:**
    - The error index representing the validation result.

#### Function: `printDataCard`
19. **Description:**
    - Print the validation result and error message for a credit card.
    
20. **Parameters:**
    - `creditCard`: An object representing the credit card with the number to be validated and validation result.
