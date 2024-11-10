const howSum = (targetSum, nums) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];
  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (const num of nums) {
        if (table[i + num] !== undefined) table[i + num] = [...table[i], num];
      }
    }
  }
  return table;
};

console.log(howSum(7, [5, 3, 4])); // [3, 4];
