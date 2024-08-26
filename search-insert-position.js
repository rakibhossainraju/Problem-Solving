/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(!target) return 0;
    let start = 0;
    let end = nums.length - 1;
  
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (nums[middle] === target) {
            return middle;
        } else if (nums[middle] < target) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    
    return start;  
};
console.log(searchInsert([1,3,5,6], 5))
console.log(searchInsert([1,3,5,6], 2))
console.log(searchInsert([1,3,5], 4))