        project: 10-contains
        author: Alessio Burbulia

## request of exercise

● Create a function called notBad that takes a single argument, a string

● Create a function called aContainsb

● It should take in two strings, and return true if the first string contains the second,
otherwise it should return false

For example
aContainsB ("Another hello world", "hell");


## Approach to the Problem:
1. **Function Definition:** I'll create a function called `aContainsB` that takes in two strings and returns true if the first string contains the second, otherwise it should return false.
2. **Length and Type Checking:** I'll verify if both inputs are strings and if the length of the first string is greater than the length of the second.
3. **Finding the Substring:** I'll use the `indexOf` method to search for the position of the second string within the first.
4. **Returning the Result:** If `indexOf` returns an index other than -1, it means that the second string is contained within the first, so I'll return true, otherwise I'll return false.