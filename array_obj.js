const myObj = [];

// Check if the object myObj is an array using the Array.isArray() method
const isArray1 = Array.isArray(myObj);

// Check if the object myObj is an array using the instanceof operator
const isArray2 = myObj instanceof Array;

console.log(isArray1); // true
console.log(isArray2); // true
