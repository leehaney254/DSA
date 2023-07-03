// we define a function to get a digit
// we do the absolute of the digit
// we divide by ten to the power of the position
// we do a modulus
// we floorr

const getDigit = (number, position) => {
  return Math.floor(Math.abs(number) / Math.pow(10, position)) % 10;
}

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

const mostDigits = (arr) => {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, digitCount(arr[i]));
  }
  return max;
}


// we get the count of the most digits
// we loop according to most coundts
//
const radixSort = (nums) => {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      digitBuckets[getDigit(nums[i], k)].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

// console.log(getDigit(3847, 2));
// console.log(digitCount(3847));
// console.log(mostDigits([1234, 56, 7, 10459]))
console.log(radixSort([1234, 56, 7, 10459]))