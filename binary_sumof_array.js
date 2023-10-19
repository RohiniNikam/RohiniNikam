function binarySearch(array, target) {
  let low = 0;
  let high = array.length - 1;
  let sum = 0;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (array[mid] === target) {
      return sum + array[mid];
    } else if (array[mid] < target) {
      low = mid + 1;
      sum += array[mid];
    } else {
      high = mid - 1;
    }
  }

  return -1; // target not found
}

// Example usage:
const array = [1, 2, 3, 4, 5];
const sum = binarySearch(array, 3);

console.log(sum); // 10
