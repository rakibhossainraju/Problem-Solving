const canSum = (targetSum, numbers, memo = {}) => {
  // console.log(memo);
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  
  for(const num of numbers){
    const remainder = targetSum - num;
    memo[remainder] = canSum(remainder, numbers, memo);
    if (memo[remainder]) return true;
  }
  return false;
};

console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [5, 3, 4, 7])); // true
console.log(canSum(7, [2, 4])); // true
console.log(canSum(8, [2, 3, 5])); //true
console.log(canSum(300, [7, 14])); // false