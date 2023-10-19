function recursiveIsPalindrome(string) {
  if (string === "" || string.length === 1) {
    return true;
  } else {
    return string[0] === string[string.length - 1] && recursiveIsPalindrome(string.substring(1, string.length - 1));
  }
}

// Example usage:
const string = "nitin";
const isPalindrome = recursiveIsPalindrome(string);

console.log(isPalindrome); // true
