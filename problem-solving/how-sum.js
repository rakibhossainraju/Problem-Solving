const howSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  for(const num of numbers){
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers, memo);
    if (remainderResult !== null) {
      memo[targetSum] =  [...remainderResult, num];
      return memo[targetSum];
    } else memo[targetSum] = remainderResult;
  }
  return null;
};
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(8, [2,3,5]));
console.log(howSum(1000, [7, 14]));