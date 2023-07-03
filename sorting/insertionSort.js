// we sort an array of numbers in ascending order
// we create a function called insertionSort that takes an array as an argument
// we create our first loop that starts from the begining to the end
// we create a second loop that starts from i+1 but moves in the opposite direction
// if [i+1] is greater than the previous num we insert [i+1] to [num + 1] then we break
// we repeat until the whole loop is sorted
// example input: [5, 3, 4, 1, 2], output: [1, 2, 3, 4, 5]
// bigO of O(n^2)

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let comparedNo = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > comparedNo; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = comparedNo;
  }
  return arr;
}

console.log(insertionSort([5, 3, 4, 1, 2, 6, 10, 9]));