const returnSring = (s, indices) => {
  let data = [];
  for (let i = 0; i < indices.length; i++) {
    data[indices[i]] = s[i];
  }

  return data.join("");
};
console.log(returnSring("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
