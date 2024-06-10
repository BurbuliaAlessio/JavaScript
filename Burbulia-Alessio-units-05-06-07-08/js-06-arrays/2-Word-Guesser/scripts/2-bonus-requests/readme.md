### Word Guesser

#### Game Initialization:
1. **Variable Definition:**
   - `word`: The word to guess.
   - `attempts`: The maximum number of allowed guesses.
   - `arrayWord`: Array of letters of the word.
   - `arrayYourTry`: Array of guessed letters.
   - `point`: The total reward points.
   - `pointStatus`: Flag to indicate if points should be added or subtracted.

2. **Word Generation:**
   - Use the `randomWord` function to generate a random word from a predefined list.

3. **Array Initialization:**
   - Create `arrayWord` with the letters of the word converted to uppercase.
   - Create `arrayYourTry` with underscores to represent the letters to guess.

#### Function `randomWord`:
4. **Random Word Generation:**
   - Select a random word from a predefined list of words.

#### Function `pointGen`:
5. **Reward Generation:**
   - Generate a random reward or penalty based on `pointStatus` and update `point` accordingly.

#### Function `printHangHuman`:
6. **Hangman Visualization:**
   - Generate and print the hangman image based on the current number of attempts.

#### Function `underSlengthWord`:
7. **Underscore Generation:**
   - A function that returns a string of underscores based on the word length.

#### Function `guessLetter`:
8. **Letter Verification and Guessing:**
   - Check if the input is a single-character string.
   - Iterate through `arrayWord` to check if the letter is present in the word.
   - Update `arrayYourTry` and display the current guessed letters.
   - Provide feedback to the user on correct or incorrect guesses, remaining attempts, and game outcome.
   - Adjust `point` and call `printHangHuman` and `pointGen` accordingly.

#### Game Testing:
9. **Calling the `guessLetter` Function:**
   - Execute multiple calls to `guessLetter` to test the game with different letters.

#### Bonuses:
10. **Additional Features:**
    - Implement additional features such as random rewards, hangman image display, and random word selection from an array.