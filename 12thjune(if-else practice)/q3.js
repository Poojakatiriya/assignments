// 3. Age-based Eligibility
// Prompt the user to enter their age. Use if-else to check if the person is eligible to vote (18 or older). Display a suitable message.

var prompt = require('prompt-sync')();
let age=prompt('enter Age: ')
if(age>=18){
    console.log("Eligible to give vote")
}
else{
    console.log("Not Eligible to give vote")
}
