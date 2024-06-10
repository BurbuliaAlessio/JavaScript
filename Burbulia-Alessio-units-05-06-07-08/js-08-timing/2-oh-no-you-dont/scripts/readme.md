file: oh no you don't
author: Burbulia Alessio

## Problem Description
Write a JavaScript program that accomplishes the following tasks:
1. Write a function `useful` that does something useful in JavaScript.
2. Schedule the `useful` function to run after 10 seconds.
3. Write another function that cancels the scheduling of the `useful` function.
4. Use the second function to cancel the first one after 5 seconds and output `'function cancelled'` to the console.
5. Watch the console for the output.

## Approach to the Solution
To solve this problem, we'll follow these steps:
1. Define a function named `useful` that performs a useful task in JavaScript.
2. Use the `setTimeout` function to schedule the execution of the `useful` function after 10 seconds.
3. Write another function named `stopUseful` that cancels the scheduling of the `useful` function using the `clearTimeout` function.
4. Use the `setTimeout` function to schedule the execution of the `stopUseful` function after 5 seconds.
5. When the `stopUseful` function is executed, it will cancel the scheduling of the `useful` function and log `'function cancelled'` to the console.
6. Observe the console output to verify the program's behavior.