        project: 8-verbing
        author: Alessio Burbulia

## request of exercise

● Create a function called verbing

● It should take a single argument, a string. If its length is at least 3, it should add 'ing' to 
  its end, unless it already ends in 'ing', in which case it should add 'ly' instead
  
● If the string length is less than 3, it should leave it unchanged

### For example
```
verbing('swim'): 'swimming'
verbing('swimming'): 'swimmingly'
verbing('go'): 'go'
```

## Approach to the Problem:
1. **Function Definition:** I'll create a function called `verbing` that takes a single argument, a string, and returns the string with the appropriate verb form.
2. **Length Checking:** Inside the function, I'll check if the length of the string is at least 3 characters. If the length is less than 3, the function will leave the string unchanged.
3. **Adding 'ing' or 'ly':** If the length of the string is at least 3, the function will add 'ing' to the end of the string unless the string already ends in 'ing', in which case it will add 'ly' instead.
4. **Error Handling:** If the input is invalid (not a string or is of length less than 2), the function will return an error message.