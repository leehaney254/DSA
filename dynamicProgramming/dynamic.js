// fibonacci with recurssion BigO (2^N)
const Fibonacci = (n) => {
  if (n <= 2) return 1;
  return Fibonacci(n - 1) + Fibonacci(n - 2);
}

// memoized Fibbonacci BigO O(N)
const memFibonacci = (n, memo = []) => {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  const result = memFibonacci(n - 1, memo) + memFibonacci(n - 2, memo);
  memo[n] = result;
  return result;
}

// tabula Fibonacci
const tabFibonacci = (n) => {
  if (n <= 2) return 1;
  const fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}

console.log(tabFibonacci(200))

