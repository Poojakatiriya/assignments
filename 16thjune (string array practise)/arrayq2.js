// 2. **Flatten an Array**  
//    Write a function `flattenArray(arr)` to flatten a nested array (1 level deep).  
//    Example: `[[1, 2], [3, 4], [5]] → [1, 2, 3, 4, 5]`

function flattenArray(arr) {
  const flat = [];

  for (let i = 0; i < arr.length; i++) {
    const inner = arr[i];
    for (let j = 0; j < inner.length; j++) {
      flat.push(inner[j]);
    }
  }

  return flat;
}
console.log(flattenArray([[1, 2], [3, 4], [5]])); 
