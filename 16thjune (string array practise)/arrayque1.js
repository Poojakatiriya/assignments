// 1. **Remove Duplicates**  
//    Write a function `removeDuplicates(arr)` that removes duplicate values from an array.  
//    Example: `[1, 2, 2, 3, 4, 4] → [1, 2, 3, 4]`

function removeDuplicates(arr) {
  const uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    // Check if the item is not already in the unique array
    if (!uniqueArr.includes(item)) {
      uniqueArr.push(item);
    }
  }

  return uniqueArr;
}
console.log(removeDuplicates([1, 2, 0, 0, 5, 5]));
