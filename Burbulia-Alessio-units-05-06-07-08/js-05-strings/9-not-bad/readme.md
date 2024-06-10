        project: 9-not-bad
        author: Alessio Burbulia

## request of exercise

● Create a function called notBad that takes a single argument, a string

● It should find the first appearance of the substrin 'not' and 'bad'

● If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with
'good' and return the result

● If it doesn't find 'not' and 'bad' in the right seque (or at all), just return the original sentence

For example
```
notBad('This dinner is not that bad!'): 'This dinner is good!'
notBad('This movie is not so bad!'): 'This movie is good!'
notBad('This dinner is bad!'): 'This dinner is bad!
```

## Approach to the Problem:
1. **Function Definition:** I'll create a function called `notBad` that takes a single argument, a string, and returns the modified string if it finds the substring 'not' followed by 'bad' in the correct sequence.
2. **Length and Type Checking:** I'll check if the input is a string and if it has at least 7 characters (the minimum length to include both 'not' and 'bad').
3. **Finding Substrings:** I'll find the index of the first occurrence of 'not' and 'bad' in the string.
4. **Replacing Substrings:** If 'not' precedes 'bad' and both substrings are present in the string, I'll replace the entire 'not'...'bad' substring with 'good' using regular expression.
5. **Returning the Result:** I'll return the modified string or the original string if 'not' and 'bad' are not present in the correct sequence.