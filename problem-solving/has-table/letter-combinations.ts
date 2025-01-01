// https://leetcode.com/problems/letter-combinations-of-a-phone-number/?envType=problem-list-v2&envId=hash-table

function letterCombinations(digits: string): string[] {
  if (digits.length === 0) return [];
  const dialPed: Record<string, string[]> = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
  };
  const result: string[] = [];

  const backtrack = (
    currentIndex: number,
    currentCombination: string,
  ): void => {
    if (currentIndex === digits.length) {
      result.push(currentCombination);
      return;
    }
    const currentDigit = digits[currentIndex];
    const letters = dialPed[currentDigit];

    for (const letter of letters) {
      backtrack(currentIndex + 1, currentCombination + letter);
    }
  };

  backtrack(0, "");

  return result;
}

console.log(letterCombinations("23"));
