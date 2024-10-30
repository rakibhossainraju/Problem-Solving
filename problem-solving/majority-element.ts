function majorityElement(nums: number[]): number {
    let candidate = nums[0];
    let count = 1;

    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i];
            count = 1;
        } else if (nums[i] === candidate) {
            count++;
        } else {
            count--;
        }
    }

    return candidate;
}

// console.log(majorityElement([3, 2, 3])); // 3
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
// console.log(majorityElement([3,3,2,3,2,2, 3])); // 2
 console.log(majorityElement([1,2,3,4,6,1] )); // 2
