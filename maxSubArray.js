var maxSubArray = function (nums) {
  let returnSum = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = 0 + nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];
      if (sum > returnSum) returnSum = sum;
    }
  }
  return returnSum;
};

console.log(maxSubArray([1]));
