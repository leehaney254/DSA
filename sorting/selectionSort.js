// We are going to sort an array of numbers in ascending order
// We declare a function called selection sort that takes in an array
// We declare a variable min to store the index of the minimum value and set the first elements index as its value
// we start our first loop from the begining to the end with i
// we start a second loop from i + 1
// we find the index of the minimum value between min and j
// we create a function for swapping
// at the end of the loop we swap the minimum value to the i position
// input example: [5, 10, 7, 12, 14, 28, 1, 18]
// output: [1, 5, 7, 10, 12, 14, 18, 28]
// Edge case when the array has alread been sorted we short circuit
// has a bigO of O(n^2)

const selectionSort = (arr) => {
  let min;
  for (let i = 0; i < arr.length - 1; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) min = j;
    }
    if (min !== i) swap(arr, i, min);
  }
  return arr;
}

const swap = (arr, ind1, ind2) => {
  [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]];
}

console.log(selectionSort([5, 10, 7, 12, 14, 28, 1, 18]));