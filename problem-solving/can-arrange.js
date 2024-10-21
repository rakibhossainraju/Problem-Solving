/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function(arr, k) {
  // Step 1: Create a remainder count array of size k
  const remainderCount = new Array(k).fill(0);
  
  // Step 2: Fill the remainder count array
  for (let num of arr) {
      const remainder = ((num % k) + k) % k; // Handle negative numbers
      remainderCount[remainder]++;
  }
  
  // Step 3: Check pairing conditions
  
  // Check if count of remainder 0 is even
  if (remainderCount[0] % 2 !== 0) return false;
  
  // Check other remainders
  for (let i = 1; i <= Math.floor(k / 2); i++) {
      if (i === k - i) {
          // Special case for even k: count of remainder k/2 must be even
          if (remainderCount[i] % 2 !== 0) return false;
      } else {
          // Count of remainder i must match remainder k - i
          if (remainderCount[i] !== remainderCount[k - i]) return false;
      }
  }
  
  return true;
};

console.log(canArrange([1, 2, 3, 4, 5, 10, 6, 7, 8, 9], 5));