function canSortArray(nums: number[]): boolean {
  const setBits = [];
  for (let i = 0; i <= (2 ** 8); i++) {
    setBits.push(countSetBits(i));
  }
  const arr = [[nums[0]]];

  for (let i = 1; i < nums.length; i++) {
    if (setBits[nums[i]] === setBits[nums[i - 1]]) {
      arr[arr.length - 1].push(nums[i]);
    } else {
      arr.push([nums[i]]);
    }
  }
  const flat = arr.flatMap((ele) => ele.sort((a, b) => a - b));

  for (const [i, n] of flat.entries()) {
    if (flat[i + 1] !== undefined) {
      if (n > flat[i + 1]) {
        return false;
      }
    }
  }
  return true;
}

function countSetBits(num: number): number {
  let count = 0;
  while (num > 0) {
    count += num & 1;
    num >>= 1;
  }
  return count;
}

console.log(canSortArray([8, 4, 2, 30, 15])); // Output: true
console.log(canSortArray([1, 2, 3, 4, 5])); // Output: true
console.log(canSortArray([20, 16])); // Output: false
console.log(canSortArray([107, 76, 52])); // Output: false
console.log(canSortArray([107, 76, 52]));
console.log(canSortArray([136, 256, 10]));
