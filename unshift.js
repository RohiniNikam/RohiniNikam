function addElementToStartOfArray(array, element) {
  // Add the element to the beginning of the array.
  array.unshift(element);

  // Return the updated array.
  return array;
}

// Create an array.
const arr = [3, 2, 1];

// Add the element `4` to the beginning of the array.
const updatedArray = addElementToStartOfArray(arr, 5);

// Print the updated array.
console.log(updatedArray); // [4, 3, 2, 1]
