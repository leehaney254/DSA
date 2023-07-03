// We declare a function called pivot that takes in three arguments
// an array, a start index = 0, an end index(array length - 1)
// we grab the pivot from the start of the array
// store the current index
// loop through the array and compare each element with the pivot
// if it is less than the pivot we swap the element and increase the pivot value
// at the end we swap the pivot value with the value at the pivot index
// example input: [4, 8, 2, 1, 5, 7, 6, 3], output: 3

const pivot = (arr, startIndex = 0, endIndex) => {
  endIndex = arr.length - 1;
  let pivot = startIndex;

  for (let i = startIndex; i <= endIndex; i++) {
    if (arr[i + 1] <= arr[startIndex]) {
      pivot++;
      swap(arr, pivot, i + 1);
    }
  }
  swap(arr, pivot, startIndex);
  return pivot;
}

const swap = (arr, ind1, ind2) => {
  [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]];
}

// console.log(pivot([28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18], 0, 0));
// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3], 0, 0));

// we create a function called quick sort
// we create a base case where if left is equal or less than right
// we recursively call it to left and right
// we return the array
// bigO O(nlog n)

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));