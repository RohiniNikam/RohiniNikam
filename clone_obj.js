const originalObject = {
  name: "Bard",
  age: 1,
  occupation: "Large Language Model"
};

// Clone the object using the Object.assign() method
const clonedObject = Object.assign({}, originalObject);

// Check if the cloned object is a copy of the original object
console.log(clonedObject === originalObject); // false

// Check if the cloned object has the same properties as the original object
console.log(clonedObject.name === originalObject.name); // true
console.log(clonedObject.age === originalObject.age); // true
console.log(clonedObject.occupation === originalObject.occupation); // true
