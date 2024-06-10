file: 5-my-setInterval

## Problem Description

1. Pretend that `setInterval()` doesn't exist.
2. Re-create it using `setTimeout` naming your function `mySetInterval`.
3. Test your new function.
4. Modify your function so that it automatically stops after 15 intervals.

## Approach to the Solution

1. **Re-create `setInterval` Using `setTimeout`**:
   - Create a function `mySetInterval` that takes a function and an interval as parameters.
   - Use `setTimeout` to call the function repeatedly at the specified interval.
   - Implement a mechanism to keep track of the number of intervals and stop after 15 executions.

2. **Track Execution Count**:
   - Use a counter variable to track the number of times the function has been executed.
   - Stop the interval after 15 executions by clearing the timeout.
