// to convert binary to ascii we split the string into groups of 8 bits
// we convert to their decimal values
// map their values to ascii

const binary = "01100110 01101001 01101110 01100100 00101110 01100110 01101111 01101111 00101111 01110011 01110000 01101111 01110100 01101100 01101001 01100111 01101000 01110100 01101111 01101110 01101110 01100001 01101001 01110010 01101111 01100010 01101001";
let result = "";

const converter = (binaryString) => {
  const splitted = binaryString.split(" ");
  for (let binarys of splitted) {
    const no = parseInt(binarys, 2);
    const character = String.fromCharCode(no);
    result += character;
  }
  return result;
}

console.log(converter(binary));