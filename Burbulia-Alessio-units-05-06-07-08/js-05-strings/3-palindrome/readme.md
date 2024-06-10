        project: 3-palindrome
        author: Alessio Burbulia

# 3 palindrome

## request of exercise
    Using your reverse() function from the previous exercise, write a simple function to check if a string is a palindrome 

    ● A palindrome is a word that reads the same backwards as forwards. For example, the word "madam"
    is a palindrome

    ● Write a JavaScript function called isPalindrome which has one parameter, a string, and which
    returns true if that string is a palindrome, else false

    ● For example, the call isPalindrome("madam") should return true, while isPalindrome("madame")
    should return false

## on javascript

1. **Function Definition:** I created a function called `isPalindrome` which accepts one parameter, `s`, representing the string to check if it's a palindrome.
2. **Palindrome Verification:** Within the function, I utilized the `reverse` function from the previous exercise to obtain the reversed string of `s`. Subsequently, I compared the original string with the reversed one to determine if they are equal, thus indicating whether `s` is a palindrome.
3. **String Preparation:** Before comparing the original string with the reversed one, I removed punctuation and converted all characters to lowercase to make the verification case-insensitive.
4. **Returning the Result:** The function returns `true` if the string is a palindrome and `false` otherwise.