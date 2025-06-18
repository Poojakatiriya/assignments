// 5. **Group by Type**  
//    Write a function `groupByType(arr)` that groups array elements by their type.  
//    Example: `[1, 'a', true, 2, 'b'] → { number: [1, 2], string: ['a', 'b'], boolean: [true] }`


function groupByType(arr) {
  const result = {};

  for (let i = 0; i < arr.length; i++) {
    const type = typeof arr[i];

    if (!result[type]) {
      result[type] = [];
    }

    result[type].push(arr[i]);
  }

  return result;
}

console.log(groupByType([1, 'a', true, 2, 'b']));
