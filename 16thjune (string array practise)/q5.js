// 5. **Character Frequency**  
//    Write a function `charFrequency(str)` that returns an object with the frequency of each character in the string.  
//    Example: `"aabbbc" → { a: 2, b: 3, c: 1 }`

function charFrequency(str) {
  // Create an empty object to store character counts
  const freq = {};

  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // If the character already exists in the object, increment its count
    if (freq[char]) {
      freq[char]++;
    } else {
      // If it's the first time we see the character, set count to 1
      freq[char] = 1;
    }
  }

  return freq;
}
console.log(charFrequency("aabbbc"));
console.log(charFrequency("saaaregaamaa"))
