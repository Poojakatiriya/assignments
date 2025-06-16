// 6. Simple Grading System
// Write a program that takes a score (0–100) as input and assigns a grade based on the following:
// 90 and above → Grade A
// 75–89 → Grade B
// 50–74 → Grade C
// Below 50 → Fail
// Use nested or chained if-else statements.

var prompt = require('prompt-sync')();
let score=prompt('enter score: ')
if(score>=90){
    console.log("Grade A")
}
else if(score>=75){
    console.log("Grade B")
}
else if(score>=50){
    console.log("Grade C")
}
else{
    console.log("Fail")
}