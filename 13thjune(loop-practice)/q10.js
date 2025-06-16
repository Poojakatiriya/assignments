// 10. Count how many numbers between 1 and 100 are divisible by 9.

let count=0;
for(let i=1;i<=100;i++){
    if(i % 9===0){
        count++;
    }
}
console.log(`Total numbers between 1 to 100 that are divisible by 9 is: ${count}`);