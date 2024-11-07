/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const hasTable = {};
  for (const char of s) hasTable[char] = (hasTable[char] ?? 0) + 1;
  const frequencies = Object.values(hasTable);
  let longestPalindrome = 0;
  let odd = 0;

  for (const f of frequencies) {
    if (!(f % 2)) {
      longestPalindrome += f;
    } else {
      if (!odd) odd = 1;
      longestPalindrome += f - 1;
    }
  }
  return longestPalindrome + odd;
};

console.log(longestPalindrome("abccccdd"));
console.log(longestPalindrome("a"));
console.log(longestPalindrome("aAbBABba"));
