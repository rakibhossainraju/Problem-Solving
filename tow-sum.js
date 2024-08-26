/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    const hashMap = {};
    for(let i = 0; i < nums.length; i++)  {
        const currentNum = nums[i];
        const complete = target -  currentNum;

        if(hashMap[complete] !== undefined) {
            return [hashMap[complete], i]
        }
        hashMap[currentNum] = i;
    }
    return []
};
console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,2,4], 15));
