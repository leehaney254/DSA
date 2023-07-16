// We create a function binary search that takes in a sorted array and the value to search
// we use the sliding window technique to find the values
// we create a left pointer that is at the start of the array and a right pointer at the end
// we create a pointer to the middle of the array
//if the middle is equal to value we return the index
// if the middle is less than the value we move the right pointer to the middle position
// we find a new middle position
// if middle is greate than value we movethe left pointer to the middle
// we find a new middle
// if right and left are + or - 1 of middle and the value is not there we return -1 
// Example input ([0,1,2,3,4,5,6,7,8,9,10], 8), output 8
// Example input ([0,1,2,3,4,5,6,7,9,10], 8), output -1
// Edge case: when array is empty
// bigO is O(log n)

const binarySearch = (array, value) => {
  let leftPointer = 0;
  let rightPointer = array.length - 1;
  let centerPointer = Math.floor((leftPointer + rightPointer) / 2);
  if (array.length === 0) return -1;
  while ((centerPointer + 1 !== rightPointer) || (centerPointer - 1 !== leftPointer)) {
    if (array[centerPointer] === value) return centerPointer;
    if (array[centerPointer] < value) leftPointer = centerPointer;
    if (array[centerPointer] > value) rightPointer = centerPointer;
    centerPointer = Math.floor((leftPointer + rightPointer) / 2);
  }

  if (array[centerPointer] === value) return centerPointer;
  if (array[rightPointer] === value) return rightPointer;
  if (array[leftPointer] === value) return leftPointer;
  return -1;
}

console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8));
console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 9, 10], 8));
console.log(binarySearch([40, 41, 42, 43, 45, 46, 47, 48, 49, 50], 50));
console.log(binarySearch([40, 41, 42, 43, 45, 46, 47, 48, 49, 50], 40));
console.log(binarySearch([], 50));
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28], 15));