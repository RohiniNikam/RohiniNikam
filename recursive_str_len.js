function recursiveStringLength(string) {
  if (string === "") {
    return 0;
  } else {
    return 1 + recursiveStringLength(string.substring(1));
  }
}

// Example usage:
const string = "Hi, world!";
const length = recursiveStringLength(string);

console.log(length); // 13
