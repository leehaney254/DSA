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