const allConstruct = (target, wordBank) => {
  const table = Array.from({ length: target.length + 1 }, () => []);
  table[0] = [[]];

  for (let i = 0; i <= target.length; i++) {
    for (const word of wordBank) {
      const bouncedIndex = i + word.length;
      const prefix = target.slice(i, bouncedIndex);

      if (prefix === word) {
        const newCombinations = table[i].map((subArr) => [...subArr, word]);
        if (table[bouncedIndex] !== undefined) {
          table[bouncedIndex].push(...newCombinations);
        }
      }
    }
  }

  return table[target.length];
};

console.log(
  allConstruct("abcdef", ["ab", "abc", "ef", "c", "cd", "def", "abcd"]),
);
console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(allConstruct("blur", ["blu", "lu", "bl", "u"]));

/*
  [
    [ ab, cd, ef ],
    [ ab, c, def ],
    [ abc, def ],
    [ abcd, ef ]
  ]
*/
