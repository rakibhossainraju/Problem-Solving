/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
  let convertedStr = "";
  for (const char of s) {
    convertedStr += char.charCodeAt(0) - 96;
  }
  for (let i = 0; i < k; i++) {
    let sum = 0;
    for (const char of convertedStr) {
      sum += parseInt(char);
    }
    convertedStr = sum.toString();
  }

  return Number(convertedStr);
};

console.log(getLucky("zbax", 2));
console.log(getLucky("iiii", 1));
