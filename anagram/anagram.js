// Here we are going to use the frequency counter approach
// it has a bigO of O(n)
// We create two objects where we will store the frequency of each element in each string
// we loop through the first arry and store the frequency
// we loop through the second array and store the freauency
// we loop the third time and compare the frequency
// return true if they match
// return false if they don't
// Example inputs: validAnagram(' ', ' '); , validAnagram('aaz', 'zza');, validAnagream('anagram', nagaram);
//Outputs: true, false, true
// we will assume we get alphabets in lowercase but
// edge case is if we get invalid input ie. numbers, symbols

const validAnagram = (string1, string2) => {
  frequency1 = {};
  frequency2 = {};
  if (string1 !== string2) {
    return false
  }
  for (let char of string1) {
    frequency1[char] = (frequency1[char] || 0) + 1;
  }
  for (let char of string2) {
    frequency2[char] = (frequency2[char] || 0) + 1;
  }
  for (let key in frequency1) {
    if (!(key in frequency2)) {
      return false;
    }
    if (frequency1[key] !== frequency2[key]) {
      return false
    }
  }
  return true
}

console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram(' ', ' '));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('awesome', 'awesom'));