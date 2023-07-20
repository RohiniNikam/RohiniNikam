function findLargest(num1, num2, num3) {

  if(num1 > num2 && num1 > num3){
    console.log(`${num1} is the largest number`)
  }
  else if (num2 > num3){
    console.log(`${num2} is the largest number`)
  }
  else{
    console.log(`${num3} is the largest number`)
  }
}

findLargest(21,45,13) //"45 is the largest number"
findLargest(34,18,52) //"52 is the largest number"
findLargest(64,11,11) //"64 is the largest number"