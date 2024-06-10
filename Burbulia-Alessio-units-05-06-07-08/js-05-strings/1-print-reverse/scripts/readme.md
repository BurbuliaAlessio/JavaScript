# 01 - print reverse

        project: 2-reverse
        author: Alessio Burbulia

## request of exercise

- Write a JavaScript function called reverse which has one parameter, a string, and which returns 
  that string in reverse
- For example, the call reverse("foobar") should return the string "raboof"

Note
If you used Array methods in your solution, try to write the same function without using the array 
methods (submit separate files for each solution)

## on my javascript

1. **Function Definition:** I created a function called `printReverse` that takes one parameter, `s`, which represents the string to be reversed.
2. **Initialization of the reversed string:** I initialized a variable `reverseS` as an empty string. This variable will contain the reversed string.
3. **Input Validation:** I checked if `s` is a string and if its length is greater than 1. If the input does not meet these criteria, the function returns an error message.
4. **String Iteration:** I iterated over the original string `s` from the last character to the first using a `for` loop.
5. **Construction of the reversed string:** During the iteration, I extracted each character from the original string and concatenated it to `reverseS`.
6. **Returning the reversed string:** At the end of the loop, the function returns the reversed string `reverseS`.