function sumOfArrayElementsUsingReduce(array) {
  // Calculate the sum of the array elements using the reduce() method.
  const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  // Return the sum.
  return sum;
}

// Example usage:

const array = [1, 2, 3, 4, 5, 45];

const sum = sumOfArrayElementsUsingReduce(array);

console.log(sum); // Output: 15
