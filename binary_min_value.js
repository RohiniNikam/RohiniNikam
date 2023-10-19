function binarySearchMin(array) {
  let low = 0;
  let high = array.length - 1;
  let min = array[0];

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (array[mid] < min) {
      min = array[mid];
    }

    if (array[mid] < array[low]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return min;
}

// Example usage:
const array = [10, 22, 3, 34, 45];
const min = binarySearchMin(array);

console.log(min); // 1
