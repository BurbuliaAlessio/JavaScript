        project: 11-the-group
        author: Alessio Burbulia

## request of exercise

● Use the previous function to write another function called group that checks whether a string is
part of another longer string that is a list of names of a group
The function should output the results to the console

```
let group = "Mary, James, and John";
let oldGuy = "James";
// Outputs: "James IS part of the group"
let newGuy = "Philip";
// Outputs: "Philip is NOT part of the group"
```


## Approach to the Problem:
1. **Function Definition:** I'll create a function called `group` that will use the previous function `aContainsB` to check whether a string is part of another longer string representing a list of names of a group.
2. **Length and Type Checking:** I'll verify if both inputs are strings and if the length of the string containing the group is greater than the length of the person string.
3. **Checking Membership:** I'll use the `aContainsB` function to check if the person string is contained within the group string.
4. **Returning the Result:** If `aContainsB` returns true, it means the person is part of the group and I'll print an appropriate message. Otherwise, I'll print a message indicating that the person is not part of the group.