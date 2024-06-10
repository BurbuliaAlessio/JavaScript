        project: 2-reverse
        author: Alessio Burbulia

# 2 reverse

## request of exercise
2.Reverse
- Write a JavaScript function called reverse which has one parameter, a string, and which returns 
  that string in reverse
- For example, the call reverse("foobar") should return the string "raboof"

Note
If you used Array methods in your solution, try to write the same function without using the array 
methods (submit separate files for each solution)

## on my javascript

2. **Function Definition:** I created a function called `reverse` that takes one parameter, `s`, which represents the string to be reversed.
3. **Initialization of the reversed string:** I initialized a variable `reverseS` as an empty string. This variable will contain the reversed string.
4. **Input Validation:** I checked if `s` is a string and if its length is greater than 1. If the input does not meet these criteria, the function returns an error message.
5. **String Iteration:** I iterated over the original string `s` from the last character to the first using a `for` loop.
6. **Construction of the reversed string:** During the iteration, I extracted each character from the original string and concatenated it to `reverseS`.
7. **Returning the reversed string:** At the end of the loop, the function returns the reversed string `reverseS`.