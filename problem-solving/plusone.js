/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
  let end = digits.length - 1;
  while(end >= 0) {
    const num = digits[end];
    if (num === 9) {
      digits[end] = 0;
    } else {
      digits[end] = num + 1;
      break;
    }
    end--;
  }
  if (digits[0] === 0) return [1, ...digits];
  return digits;
};
console.log(plusOne([1, 2, 3]));
console.log(plusOne([4,3,2,1]));
console.log(plusOne([9]));