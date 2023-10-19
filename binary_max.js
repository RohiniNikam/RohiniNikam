function binarySearchMax(array) {
  let low = 0;
  let high = array.length - 1;
  let max = array[0];

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (array[mid] > max) {
      max = array[mid];
    }

    if (array[mid] > array[low]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return max;
}

// Example usage:
const array = [10, 22, 3, 34, 45];
const max = binarySearchMax(array);

console.log(max);
