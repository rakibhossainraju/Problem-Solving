const bestSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];
  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (const num of numbers) {
        if (table[i + num] !== undefined) {
          const combination = [...table[i], num];
          const prevVal = table[i + num];

          if (!prevVal || prevVal.length > combination.length) {
            table[i + num] = combination;
          }
        }
      }
    }
  }
  return table;
};
console.log(bestSum(8, [2, 3, 5])); // [3, 5];
