        project: 4-capital
        author: Alessio Burbulia

# 1 print reverse

## request of exercise

     ● Write a JavaScript function called capital which has one parameter, a string, and which returns
     that string with the first letter capitalized
     ● For example, the call toLowerCase()("hello world") should return the string "Hello world"

     Bonus
     Modify the function so that it capitalizes each word. capital2("my name is john") 
     should return the string "My Name Is John"

## on javascript

1. **Function Definition:** I created a function called `capital` that takes one parameter, `s`, which represents the string to be capitalized.
2. **Capitalizing the First Letter:** Inside the function, I used a regular expression to match the first word boundary `\b` followed by a word character `\w`, and then replaced it with its uppercase version.
3. **Returning the Capitalized String:** The function returns the string with the first letter capitalized.