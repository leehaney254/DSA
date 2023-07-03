// We are going to sort an array of numbers in ascending order
// We declare a function called bubble sort that takes in an array as argument
// we start our first loop from the end moving toward the beginning
// we start a second loop from the begining until i-1
// we create a swap funtion that swaps the two numbers
// we compare arr[j] with arr[j+1] if it is greater we swap
// input example: [5, 10, 7, 12, 14, 28, 1, 18]
// output: [1, 5, 7, 10, 12, 14, 18, 28]
// Our edge case is when we have an already sorted array
// we declare a variable noswap that short ciruits if the array is already sorted
// we set it to true at the begining of every loop
// but set it to false if a swap occurs
// it has a bigO of O(n^2)


const bubbleSort = (arr) => {
  let noSwaps = false;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

const swap = (arr, index1, index2) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

console.log(bubbleSort([5, 10, 7, 12, 14, 28, 1, 18]));