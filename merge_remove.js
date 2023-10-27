function mergeAndRemoveDuplicates(array1, array2) {
  // Create a new set to store the merged and unique array elements
  const mergedSet = new Set();

  // Add the elements of both arrays to the set
  array1.forEach((element) => mergedSet.add(element));
  array2.forEach((element) => mergedSet.add(element));

  // Convert the set to an array
  const mergedArray = Array.from(mergedSet);

  // Return the merged array
  return mergedArray;
}

// Example usage
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const mergedArray = mergeAndRemoveDuplicates(array1, array2);

console.log(mergedArray); // [1, 2, 3, 4, 5, 6]
