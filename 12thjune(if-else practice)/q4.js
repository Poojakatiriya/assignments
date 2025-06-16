// 4. Number Range Validator
// Ask the user to input a number. Use if-else to check whether the number lies within the range 10 to 20, inclusive. Display "In range" or "Out of range".

var prompt = require('prompt-sync')();
let num=prompt("Enter number: ")
if(num>=10 && num<=20){
    console.log(`${num} is in range of 10 to 20`)
}
else{
    console.log(`${num} is not in range of 10 to 20`)
}