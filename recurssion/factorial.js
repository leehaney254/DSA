// the bigO of a recurssive call is n(0)
// factorial is the multiplication of a number downwards all the way to 1
// example factorial of 5! = 5 * 4 * 3 * 2 * 1 = 120
// we initialize our funtction
// we create a base case
// we return the number multiplied by itself - 1

const factorial = (num) => {
  if (num <= 1) return num;
  return num * factorial(num - 1);
}

console.log(factorial(5));
