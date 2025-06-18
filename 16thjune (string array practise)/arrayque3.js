// 3. **Find Max and Min**  
//    Write a function `findMaxMin(arr)` that returns the maximum and minimum number in an array.  
//    Example: `[4, 1, 9, -2] → { max: 9, min: -2 }`

function findMaxMin(arr) {
  // Initialize both max and min with the first element of the array
  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return { max: max, min: min };
}
console.log(findMaxMin([4, 1, 9, -2])); 
