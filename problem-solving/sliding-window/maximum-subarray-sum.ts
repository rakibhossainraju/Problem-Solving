// https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/?envType=daily-question&envId=2024-11-19

function maximumSubarraySum(nums: number[], k: number): number {
  const windowSet: Set<number> = new Set();
  let currentSUm = 0;
  let maxSum = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    const num = nums[right];

    while (windowSet.has(num) || windowSet.size >= k) {
      const toRemove = nums[left];
      windowSet.delete(toRemove);
      currentSUm -= toRemove;
      left++;
    }

    windowSet.add(num);
    currentSUm += num;

    if (windowSet.size === k) {
      maxSum = Math.max(maxSum, currentSUm);
    }
  }
  return maxSum;
}
console.log(maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3));
// console.log(maximumSubarraySum([1,5,4,2,9,5,9,], 3));
