const countConstruct = (target, wordBank) => {
  const table = Array(target.length + 1).fill(0);
  table[0] = 1;

  for (let i = 0; i <= target.length; i++) {
    for (const word of wordBank) {
      const bouncedIndex = i + word.length;
      const prefix = target.slice(i, bouncedIndex);

      if (prefix === word) {
        if (table[bouncedIndex] !== undefined) table[bouncedIndex] += table[i];
      }
    }
  }
  return table;
};

console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
