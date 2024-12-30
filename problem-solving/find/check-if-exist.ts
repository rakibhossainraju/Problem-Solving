//https://leetcode.com/problems/check-if-n-and-its-double-exist/description

function checkIfExist(numbers: number[]): boolean {
  const numSets: Set<number> = new Set(numbers);
  let zeroCount = 0;

  for (const num of numbers) {
    if (num === 0) {
      zeroCount++;
      continue;
    }
    if (numSets.has(num / 2)) return true;
  }
  if (zeroCount === 2) return true;
  return false;
}

// console.log(checkIfExist([10, 2, 5, 3])); // Output: true
// console.log(checkIfExist([3, 1, 7, 11])); // Output: false
// console.log(checkIfExist([-2,0,10,-19,4,6,-8]));
console.log(checkIfExist([2, 3, 3, 0, 0]));
