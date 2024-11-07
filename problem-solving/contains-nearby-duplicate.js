/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const hasMap = {};
  for (const [index, value] of nums.entries()) {
    if (value in hasMap) {
      if (Math.abs(hasMap[value] - index) <= k) return true;
    }
    hasMap[value] = index;
  }
  return false;
};

// console.log(containsNearbyDuplicate([1,2,3,1], 3));
// console.log(containsNearbyDuplicate([1,0,1,1], 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
// console.log(containsNearbyDuplicate([1,4,2,3,1,2], 3));
