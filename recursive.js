function countdownToOne(num) {
 //Base Case
 if (num === 1) {
 console.log(num)
 return
 } else {
 //Recursive Case
 console.log(num)
 return countdownToOne(num - 1)
 }
}
countdownToOne(14);
