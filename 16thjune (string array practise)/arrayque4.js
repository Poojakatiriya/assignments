// 4. **Sum of Even Numbers**  
//    Write a function `sumEven(arr)` that returns the sum of all even numbers in the array.  
//    Example: `[1, 2, 3, 4, 5, 6] → 12`

function sumEven(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i]; // Add to sum if the number is even
    }
  }

  return sum;
}
console.log(sumEven([1, 2, 3, 4, 5, 6])); 
