file: 3-weekday
author: Burbulia Alessio

## Problem Description

1. Write a function `getWeekDay(date)` to show the weekday in short format: 'MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'.
2. Write another function that does the same in Italian.
3. Add a language parameter to the function that accepts 'en' or 'it' and outputs the day in the correct language.

## Approach to the Solution

1. **Function to Get Weekday in English**: 
   - Use JavaScript's `Date` object to get the current date.
   - Extract the day of the week and convert it to the desired short format.
   
2. **Function to Get Weekday in Italian**: 
   - Similar to the English version, but translate the day abbreviations to Italian equivalents.
   
3. **Unified Function with Language Parameter**: 
   - Create a single function `getWeekDay` that accepts a language parameter ('en' for English and 'it' for Italian).
   - Based on the parameter, call the respective function to print and return the day of the week in the desired language.

string manipulation is not a good solution