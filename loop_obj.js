const object = {
  name: "Bard",
  age: 1,
  occupation: "Large Language Model"
};

// Loop through the object using a for...in loop
for (const key in object) {
  console.log(`${key}: ${object[key]}`);
}
