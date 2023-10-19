function isPalindrome(string) {
  // Convert the string to lowercase.
  string = string.toLowerCase();

  // Remove all non-alphanumeric characters from the string.
  string = string.replace(/[^a-z0-9]/gi, '');

  // Reverse the string.
  const reversedString = string.split('').reverse().join('');

  // Compare the original string to the reversed string.
  if (string === reversedString) {
    return true;
  } else {
    return false;
  }
}

// Example usage:

const string = '101';

const isPalindrome1 = isPalindrome(string);

if (isPalindrome1) {
  console.log('Yes');
} else {
  console.log('No');
}
