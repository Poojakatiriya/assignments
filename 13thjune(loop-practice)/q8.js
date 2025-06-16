// 8. Print the factorial of a number (e.g., 5! = 120) using a loop.

var prompt = require('prompt-sync')();
let num = prompt("Enter a number: ");
let factorial = 1;

for (let i = 1; i <= num; i++) {
  factorial *= i;
}

console.log(`Factorial of ${num} is ${factorial}`);

