// 5. Check Number Equality
// Take two numbers from the user. Use if-else to check if both numbers are equal or not. If they are not equal, indicate which one is larger.

var prompt = require('prompt-sync')();
let num1 = Number(prompt('Enter first number: '));
let num2 = Number(prompt('Enter second number: '));
if(num1===num2){
    console.log("both numbers are equal")
}
else if(num1>num2){
    console.log(`${num1} is greater than ${num2}`)
}
else{
    console.log(`${num2} is greater than ${num1}`)
}