// we have to get the number of unique values in an array.
// we short circuit if empty we return zero
// we set up two pointers both at the begining
// we compare the first two values if equal we increase the second pointer
// if they are not equal we increase the second pointer
// we replace the value with the value of the second pointer
// we repeate the above two steps until we reach the end of the array
// we then check the index of the first pointer and add one
// we return the index of the first pointer as the value
// example input: [1,1,1,1,1,2], [1,2,3,4,4,4,7,7,12,12,13], [], [-2,-1,-1,0,1]
// outputs : 2, 7, 0, 4

const countUniqueValues = (array) => {
  if (array.length === 0) {
    return 0;
  }
  let firstPointer = 0;
  let secondPointer = 1;
  while (secondPointer < array.length) {
    if (array[firstPointer] === array[secondPointer]) {
      secondPointer++;
    } else {
      firstPointer++;
      array[firstPointer] = array[secondPointer];
      secondPointer++;
    }
  }
  return firstPointer + 1;
}

// He used a for loop on j

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));