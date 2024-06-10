        project: 6-mixup
        author: Alessio Burbulia

# reuired of exercise
Create a function called mixUp
● It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each

● You can assume that the strings are at least 2 characters long
   
For example
   mixUp('mix', 'pod'): 'pox mid'
   mixUp('dog', 'dinner'): 'dig donner'

# on javascript

1. **Function Definition:** I'll create a function called `mixUp` that takes in two strings and returns the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each.
2. **Parameter Checking:** Inside the function, I'll check if the input strings are at least 2 characters long and if they are of string type. If these conditions are not met, I'll return an error message.
3. **Swapping the First 2 Characters:** I'll use the technique of splitting strings into arrays, swap the first two characters of each string, and then reconstruct the strings with the swapped characters.
4. **Concatenation and Return:** I'll concatenate the two strings with a space and return the result.