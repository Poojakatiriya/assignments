// 2. Positive, Negative, or Zero
// Ask the user to input a number. Use if-else conditions to display whether the number is positive, negative, or zero.

var prompt = require('prompt-sync')();
let num=prompt('Enter a number:')
if(num>0){
    console.log(`${num} is Positive`);
}
else if(num<0){
    console.log(`${num} is Negative`)
}
else{
    console.log(`${num} is Zero`)
}