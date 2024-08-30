/**
 * @param {string} strA
 * @param {string} strB
 * @return { {strA: string, strB: string} }
 */
const findTheSmallestStrAndFiedWithZeros = (strA, strB) => {
  if (strA.length === strB.length) return { strA, strB };

  let [longer, shorter] = strA.length > strB.length ? [strA, strB] : [strB, strA];
  
  const difference = Math.abs(strA.length - strB.length);
  shorter = '0'.repeat(difference) + shorter;

  return {
    strA: strA.length > strB.length ? longer : shorter,
    strB: strA.length > strB.length ? shorter : longer
  };
}


/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  const { strA, strB } = findTheSmallestStrAndFiedWithZeros(a, b);
  let sumStr = "";
  let carry = 0;
  let end = strA.length - 1;

  while(end >= 0){
    const numOfA = parseInt(strA[end] ?? 0);
    const numOfB = parseInt(strB[end] ?? 0);
    // console.log(numOfA, numOfB)
    let sum = numOfA + numOfB + carry;
    if(sum > 2) {
      carry = 1;
      sumStr = "1" + sumStr;
    } else if (sum > 1) { 
      carry = 1;
      sumStr = "0" + sumStr;
    } else {
      carry = 0;
      sumStr = sum + sumStr;
    }
    end--;
  }
  if (carry) return "1" + sumStr;
  return sumStr;
};


console.log(addBinary("1010", "1011"));
console.log(addBinary("1010101", "0101010"));
console.log(addBinary("1111", "1111")); // Expected "11110" got "10000"