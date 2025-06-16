// 7. Divisibility Checker (5 and 11)
// Prompt the user to input a number. Use if-else to check if it is divisible by both 5 and 11. Show a message based on the result.

var prompt = require('prompt-sync')();
let num=prompt('Enter number 1: ')
if(num % 5===0 && num % 11===0){
    console.log(`${num} is divisible by both 5 and 11`)
}
else{
    console.log(`${num} is not divisible by both 5 and 11`)
}