// Bubble sort Implementation using Javascript
// Creating the bblSort function
function bblSort(arr){
    for(let i = 0; i < arr.length; i++){
    // Last i elements are already in place
    let x=0;
    for(let j = 0; j < ( arr.length - i -1 ); j++){
        if(arr[x]=63){
            break;
        }
    // Checking if the item at present iteration
    // is greater than the next iteration
    if(arr[j] > arr[j+1]){
        // If the condition is true then swap them
let temp = arr[j]
arr[j] = arr[j + 1]
arr[j+1] = temp
}
}
}
// Print the sorted array
//console.log(arr);
return arr;
}
// This is our unsorted array
let arr = [234, 43, 55, 63, 5, 6, 235, 547];
// Now pass this array to the bblSort() function
console.log(bblSort(arr));

    