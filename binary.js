function isBinary(number) {
  // Convert the number to a string.
  const strNumber = number.toString();

  // Iterate over the characters of the string and check if each character is either '0' or '1'.
  for (let i = 0; i < strNumber.length; i++) {
    if (strNumber[i] !== '0' && strNumber[i] !== '1') {
      return false;
    }
  }

  // If all of the characters in the string are '0' or '1', the number is binary.
  return true;
}

// Example usage:

const number = 75;

const isBinary1 = isBinary(number);

if (isBinary1) {
  console.log('Yes');
} else {
  console.log('No');
}
