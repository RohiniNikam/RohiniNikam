function bubbleSort(arr) {
 let len = arr.length;
 for (let i = 0; i < len; i++) {
 for (let j = 0; j < len - i - 1; j++) {
 if (arr[j] > arr[j + 1]) {
 // swap elements
 let temp = arr[j];
 arr[j] = arr[j + 1];
 arr[j + 1] = temp;
}
}
}
return arr;
}
// Example usage:
let myArray = [5, 3, 8, 4, 2];
console.log(bubbleSort(myArray)); // Output: [2, 3, 4, 5, 8]
