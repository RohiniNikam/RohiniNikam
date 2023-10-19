function recursiveSumOfDigits(number) {
  if (number === 0) {
    return 0;
  } else {
    return (number % 10) + recursiveSumOfDigits(Math.floor(number / 10));
  }
}

// Example usage:
const number = 123456;
const sumOfDigits = recursiveSumOfDigits(number);

console.log(sumOfDigits); // 15
