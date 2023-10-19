function binarySearchAverage(array) {
  let low = 0;
  let high = array.length - 1;
  let sum = 0;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    sum += array[mid];

    if (array[mid] < array[low]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return sum / array.length;
}

// Example usage:
const array = [1, 2, 3, 4,5,6,7];
const average = binarySearchAverage(array);

console.log(average); // 3
