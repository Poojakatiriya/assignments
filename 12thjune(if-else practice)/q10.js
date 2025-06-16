// 10. Vowel or Consonant
// Take a single alphabet character as input from the user. Use if-else to check whether it's a vowel (a, e, i, o, u) or consonant.

var prompt = require('prompt-sync')();
let char=prompt("Enter character : ")
// Step 1: Check if it's a valid single alphabet letter
if (char.length === 1 && char >= 'a' && char <= 'z') {
    // Step 2: Now check if it's a vowel
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        console.log(`${char} is a vowel`);
    } else {
        console.log(`${char} is a consonant`);
    }
} else {
    console.log('Invalid input, please enter a single alphabet character');
}