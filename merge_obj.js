const object1 = {
  name: "Bard",
  age: 1,
  occupation: "Large Language Model"
};

const object2 = {
  location: "Mountain View, CA",
  interests: ["Machine learning", "Natural language processing", "Artificial intelligence"]
};

// Merge the properties of the two objects using the Object.assign() method
const mergedObject = Object.assign({}, object1, object2);

// Check if the merged object has the properties of both objects
console.log(mergedObject.name === object1.name); // true
console.log(mergedObject.age === object1.age); // true
console.log(mergedObject.occupation === object1.occupation); // true
console.log(mergedObject.location === object2.location); // true
console.log(mergedObject.interests === object2.interests); // true
