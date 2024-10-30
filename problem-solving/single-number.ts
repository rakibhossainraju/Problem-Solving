function singleNumber(nums: number[]): number {
    return nums.reduce((prev, val) => prev ^ val, 0);
}

// console.log(singleNumber([2, 2, 1])); // 1
// console.log(singleNumber([4, 1, 2, 1, 2])); // 4



function missingNumber(nums: number[]): number {
    let xorArray = nums.reduce((prev, val) => prev ^ val, 0);
    let xorAll = 0;
    for (let i = 0; i <= nums.length; i++) {
        xorAll ^= i;
    }
    return xorArray ^ xorAll;
}
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([0, 1])); // 2