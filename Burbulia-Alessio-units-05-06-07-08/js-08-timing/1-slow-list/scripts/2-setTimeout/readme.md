file: 2-setTimeout
author: Burbulia Alessio

## Problem Description
- Create an array that holds a list of 30 items (food, books, etc.).
- Print one item of the list every second until the list is completely printed.
  - Use `setInterval` to achieve this goal.
  - Do the same thing using `setTimeout`.

## Approach to the Solution
To solve this problem, we can use JavaScript's `setTimeout` function to print each element of the array at intervals of one second. We'll define a recursive function that prints an element of the array, increments the index, and schedules itself to run again after one second until all elements have been printed.
