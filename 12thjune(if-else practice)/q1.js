// 1. Even or Odd Checker
// Write a Node.js script that takes a number as input and determines whether the number is even or odd using if-else.

var prompt = require('prompt-sync')();
let num=prompt('enter a Number: ')
if(num%2===0){
    console.log(`${num} is Even number`);
}
else{
    console.log(`${num} is Odd number`);
}