# Word Guesser

#### Game Initialization:
1. **Variable Definition:**
   - `word`: The word to guess.
   - `tentative`: The maximum number of allowed guesses.
   - `arrayWord`: Array of letters of the word.
   - `arrayYourTry`: Array of guessed letters.

2. **Array Initialization:**
   - Create `arrayWord` with the letters of the word converted to uppercase.
   - Create `arrayYourTry` with underscores to represent the letters to guess.

#### Function `underSlengthWord`:
3. **Underscore Generation:**
   - A function that returns a string of underscores based on the word length.

#### Function `guessLetter`:
4. **Letter Verification:**
   - Check if the letter is a single-character string.

5. **Iteration Over Letters:**
   - Iterate through `arrayWord` to check if the letter is present in the word.
   - Add the correct letter to `arrayYourTry` in the correct position.
   - Build a `messageWordG` string that shows the guessed letters up to that point.

6. **Tentative Counting and Results:**
   - Check the number of underscores remaining in `arrayYourTry` to determine if the player has won or lost.
   - Show a feedback message about the remaining guesses.

#### Game Testing:
7. **Calling the `guessLetter` Function:**
   - Execute multiple calls to `guessLetter` to test the game with different letters.

This approach provides a clear structure for the game and offers helpful feedback to the user after each attempt.