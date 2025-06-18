// 1. Reverse a String
// This function takes a string as input and returns the reversed version of the string.
function reverseString(str) {
  // Step 1: Convert the string into an array of characters using split('')
  // Step 2: Reverse the array using reverse()
  // Step 3: Join the array back into a string using join('')
  return str.split('').reverse().join('');
}
console.log(reverseString("hello")); // Output: "olleh"