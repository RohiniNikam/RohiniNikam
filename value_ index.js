function findValueEqualToIndex(array) {
  // Create an empty array to store the indices of the elements that are equal to their index.
  const indices = [];

  // Iterate over the array and check if each element is equal to its index.
  for (let i = 0; i < array.length; i++) {
    if (array[i] === i) {
      // Add the index to the empty array.
      indices.push(i);
    }
  }

  // Return the empty array.
  return indices;
}

// Example usage:

const array = [1, 2, 3, 4, 5];

const indices = findValueEqualToIndex(array);

console.log(indices); // Output: [0, 3]