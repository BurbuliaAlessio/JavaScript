/**
 * @file: main.js
 * @author: Alessio Burbulia
 *
 * 3.Palindrome
 * ● Using your reverse() function from the previous exercise, write a simple function to check if a
 *   string is a palindrome
 * ● A palindrome is a word that reads the same backwards as forwards. For example, the word "madam"
 *   is a palindrome
 * ● Write a JavaScript function called isPalindrome which has one parameter, a string, and which
 *   returns true if that string is a palindrome, else false
 * ● For example, the call isPalindrome("madam") should return true, while isPalindrome("madame")
 *   should return false
 */

/**
 * print the reverse of my original string
 * @param {string} s - the string
 * @return {string} reverseS - the reverse of my original string
 */
function reverse(s){
	let reverseS = '';  //initialization of reverse string
	if (typeof myString === 'string' && s.length > 1){
		let lengthS = s.length;  //the lenght of my string
		for (let i = lengthS-1; i >= 0; i--){
			let sub = s.charAt(i); //get character at index i
			reverseS += sub; //concatenate to reverse string
		}
	}
	else
		reverseS = 'reverse() work with only string.length > 1';
	return reverseS; //returns the reversed string
}

/**
* Take the results of reverse() and verify is equal like myString
* @param {string} s - the string
* @return {boolean} isP - true = is palidrome | false = isn't palidrome
*/
function isPalidrome(s){
	let isP = false;//my boolean return
	if (typeof(s) === 'string' && s.length > 1){
		
		s = s.replace(/[ ?!'":,.]/g, '').toLowerCase();//let x "my string, or not?" = "mystringornot" = "mystring"
		let sRev = reverse(s);//reverse of my string
		console.log("ATTENTION : punctuation and space are not calculated");//warning
		if(s == sRev)
			isP = true;
	}
	else
		isP = 'isPalindrome() work with only string.length > 1';

	return isP;
}

console.log(isPalidrome('Yo, Banana Boy!'));
console.log(isPalidrome('A'));
console.log(isPalidrome(0));
