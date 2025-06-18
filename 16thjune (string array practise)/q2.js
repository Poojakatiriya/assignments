// 2.**Check Palindrome**  
//    Write a function `isPalindrome(str)` to check if a string is a palindrome (case-insensitive).  
//    Example: `"Madam" → true`

function isPalindrome(str) {
  const lowerStr = str.toLowerCase();                  // Convert to lowercase for case-insensitive comparison
  const reversedStr = lowerStr.split('').reverse().join(''); // Reverse the string
  return lowerStr === reversedStr;                     // Compare original and reversed
}
console.log(isPalindrome("Madam"));