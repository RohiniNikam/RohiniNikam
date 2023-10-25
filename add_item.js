const myArray = [1, 2, 3, 4, 5];

// Insert the item "new item" at index 2 using the splice() method
myArray.splice(2, 0, "10");

// Insert the item "new item" at index 2 using the concat() method
const newItemArray = ["10"];
const newArray = myArray.concat(newItemArray);

console.log(myArray); // [1, 2, "new item", 3, 4, 5]
console.log(newArray); // [1, 2, "new item", 3, 4, 5]
