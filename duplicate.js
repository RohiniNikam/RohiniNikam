function removeDuplicatesFromArray(array) {
    // Create a set.
    const set = new Set(array);
  
    // Convert the set back to an array.
    const uniqueArray = [...set];
  
    // Return the unique array.
    return uniqueArray;
  }
  
  // Create an array.
  const array = [1, 2, 3, 1, 2, 4];
  
  // Remove duplicate elements from the array.
  const uniqueArray = removeDuplicatesFromArray(array);
  
  // Print the unique array.
  console.log(uniqueArray); // [1, 2, 3, 4]
  