// 3. **Count Vowels**  
//    Write a function `countVowels(str)` to count the number of vowels in the given string.  
//    Example: `"JavaScript" → 3`

// 3. Count Vowels
// This function counts the number of vowels (a, e, i, o, u) in a given string.

function countVowels(str) {
  const lowerStr = str.toLowerCase();
  
  // Initialize a variable to count vowels
  let vowelCount = 0;

  // Loop through each character in the string
  for (let i = 0; i < lowerStr.length; i++) {
    // Check if the character is a vowel
    if ("aeiou".includes(lowerStr[i])) {
      vowelCount++;
    }
  }

  // Return the total count of vowels
  return vowelCount;
}

console.log(countVowels("JavaScript")); 

