// It has a bigO of O(n)
// we create a function that takes in a value and an array
// we loop through the array and check if the value is in the array
// if it is we return the index
// else we return -1
// edge case when array is empty

const linearSearch = (array, value) => {
  if (array.length === 0) return;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([10, 15, 39, 11, 24, 17], 17));
console.log(linearSearch(["Hi", "I", "love", "your", "coat"], "coat1"));