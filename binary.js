var addBinary = function (a, b) {
  let carry = 0;
  let result = "";
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0) {
    let sum = carry;

    if (a[i]) {
      sum += parseInt(a[i]);
      i--;
    }

    if (b[j]) {
      sum += parseInt(b[j]);
      j--;
    }

    carry = sum > 1 ? 1 : 0;
    result += sum % 2;
  }

  if (carry === 1) result += carry;
  return result.split("").reverse().join("");
};

console.log(addBinary("11", "1"));
//console.log(addBinary("1010", "1011"));

// It uses alot of memory
// But the speed is good