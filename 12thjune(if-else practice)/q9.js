// 9. Leap Year Validator
// Ask the user to enter a year. Use conditions to check whether it is a leap year or not, using the correct logic:

// Leap Year Logic Explained:
// A year is a leap year if:
// It is divisible by 4 AND not divisible by 100
// → Example: 2024, 2028
// OR it is divisible by 400
// → Example: 2000, 2400
// Years like 1900, 2100 are not leap years (divisible by 100 but not by 400).


var prompt = require('prompt-sync')();
let year=prompt('enter year: ')
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(year + " is a Leap Year.");
} else {
  console.log(year + " is NOT a Leap Year.");
}