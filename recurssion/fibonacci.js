// we know that recurssion has a bigO of O(n)
// we create our fibonacci function
// we have a base case
// we return the number multiplied by the number -1 in a function call
// sample inputs are 1, 2, 3, 4, 5, 6, 7, 8, 9
// sample output: 1, 1, 2, 3, 5, 8, 13, 21, 34
// edge case when a number is less or equal to zero

const fibonacci = (number) => {
  if (number <= 1) return number;
  return fibonacci(number - 1) + fibonacci(number - 2);
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8));
console.log(fibonacci(9));