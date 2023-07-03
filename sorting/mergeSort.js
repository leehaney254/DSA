//we want to create the merge function
// we create a function called merger that takes two sorted arrays as the argument
// we declare an empty array that we are gonna return
// we compare the first item in the first arry with the second
// we insert the smaller to the return array
// we increase count
// we continue until it is fully sorted
// example input: ([1, 10, 50], [2, 14, 99, 100]), output: [ 1,  2,  10, 14, 50, 99, 100 ]

const merger = (arr1, arr2) => {
  let returnArr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      returnArr.push(arr1[i]);
      i++;
    } else {
      returnArr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    returnArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    returnArr.push(arr2[j]);
    j++;
  }
  return returnArr;
}

//console.log(merger([1, 10, 50], [2, 14, 99, 100]));

//we create a function called merge sort
// it should break the array in halves using slice
// its a recursion and the base case is when we have an empty or one element in the array
// example input [100, 1, 99, 10, 14, 50, 2], output: [ 1,  2,  10, 14, 50, 99, 100 ]
// has a bigO of O(n log n)

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let midPoint = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, midPoint));
  let right = mergeSort(arr.slice(midPoint));
  return merger(left, right);
}

console.log(mergeSort([100, 1, 99, 10, 14, 50, 2]))
