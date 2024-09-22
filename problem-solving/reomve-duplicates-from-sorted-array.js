/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
    if(!nums.length) return 0;
    let i = 1;
    let j = 0;

    while(i < nums.length){
        const scoutNum = nums[i];
        const constNum = nums[j];
        if(scoutNum === constNum){
            i++;
        } else {
            nums[j + 1] = nums[i];
            j++;
            i++;
        }
    }
    return j + 1;
};
// console.log(removeDuplicates([0,0,1,2,2,3,4,5,6,6]));
