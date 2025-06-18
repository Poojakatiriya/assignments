// 4. **Capitalize First Letter of Each Word**  
//    Write a function `capitalizeWords(str)` that capitalizes the first letter of every word in a sentence.  
//    Example: `"hello world" → "Hello World"`

function capitalizeWords(str) {
  //Split the string into words using space as delimiter
  const words = str.split(" ");

  // Capitalize the first letter of each word
  const capitalizedWords = words.map(function(word) {
    // Make sure word is not empty
    if (word.length === 0) return "";
    // Capitalize first letter + lowercase rest
    return word[0].toUpperCase() + word.slice(1);
  });

  // Join the words back into a sentence
  return capitalizedWords.join(" ");
}

console.log(capitalizeWords("hello world")); 
console.log(capitalizeWords("my name is alice"));

