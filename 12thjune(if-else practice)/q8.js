// 8. Find the Largest of Three Numbers
// Take three numbers as input. Use multiple if-else statements to find and print the largest number among them.
var prompt = require('prompt-sync')();
let num1=prompt('Enter Number1: ')
let num2=prompt('Enter Number2: ')
let num3=prompt('Enter Number3: ')
if(num1>=num2 && num1>=num3){
    console.log(`The largest number is : ${num1}`)
}
else if(num2>=num1 && num2>=num3){
    console.log(`The largest number is : ${num2}`)
}
else{
    console.log(`The largest number is : ${num3}`)
}