file: 4-time-calculator

## Problem Description
1. We will modify the ‘Calculator’ exercise from the lesson about functions.
2. Rewrite the last function that performs all 4 operations so that there is a delay of 3 seconds between one operation and the next.

## Approach to the Solution

1. **Individual Calculation Functions**:
   - Define functions for each operation: halving a number, squaring a number, calculating the area of a circle given its radius, and calculating the percentage of one number relative to another.
   
2. **Series of Calculations with Delay**:
   - Use `setTimeout` to introduce a delay of 3 seconds between each calculation step.
   - Store intermediate results in variables and pass them to the next calculation step after the delay.