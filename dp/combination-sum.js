const combinationSum = function (candidates, target) {
  const result = [];

  const backtrack = (currentCombo, startIndex, remainder) => {
    if (remainder === 0) {
      result.push([...currentCombo]);
      return;
    }

    for (let i = startIndex; i < candidates.length; i++) {
      const num = candidates[i];
      if (num <= remainder) {
        currentCombo.push(num);
        backtrack(currentCombo, i, remainder - num); // i, not i+1, because we can reuse the same number
        currentCombo.pop(); // backtrack
      }
    }
  };

  backtrack([], 0, target);
  return result;
};

// Test cases
console.log(combinationSum([2, 3, 6, 7], 7)); // [[2, 2, 3], [7]]
console.log(combinationSum([2, 3, 5], 8)); // [[2, 2, 2, 2], [2, 3, 3], [3, 5]]
console.log(combinationSum([2], 1)); // []
