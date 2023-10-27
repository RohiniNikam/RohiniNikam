const originalArray = [1, 2, 3];
const cloneArray = [...originalArray];
console.log(originalArray); // [1, 2, 3]
console.log(cloneArray); // [1, 2, 3]
cloneArray.push(4);
console.log(originalArray); // [1, 2, 3]
console.log(cloneArray); 