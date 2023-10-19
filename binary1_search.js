function binarySearch(arr, searchValue) {
 let left = 0;
 let right = arr.length - 1;
 while (left <= right) {
 const mid = Math.floor((left + right) / 2);
 if (arr[mid] === searchValue) {
 return mid;
 } else if (arr[mid] < searchValue) {
 left = mid + 1;
 } else {
 right = mid - 1;
 }
 }
 return -1;
}
const arr = [1, 2, 3, 4, 5];
const searchValue = 3;
const index = binarySearch(arr, searchValue); // 2
console.log(index);
