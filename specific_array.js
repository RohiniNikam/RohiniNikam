const myArray = [1, 2, 3, 4, 5];

const newMyArray = myArray.slice(0, 2).concat(myArray.slice(3));

console.log(newMyArray); // [1, 2, 4, 5]
