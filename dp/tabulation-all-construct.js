const allConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill([]);
    table[0] = [[]];

    for(let i = 0; i <= target.length; i++) {
        for(const word of wordBank) {
            const bouncedIndex = i + word.length;
            const prefix = target.slice(i, bouncedIndex);

            if(prefix === word) {
                if(table[bouncedIndex] !== undefined) {
                    table[bouncedIndex].push(table[i].map(way => [word, ...way]))
                }
            }
        }
    }

    return table;
};

console.log(allConstruct('abcdef', ['ab', 'abc', 'ef', 'c', 'cd', 'def', 'abcd']));
/*
  [
    [ ab, cd, ef ],
    [ ab, c, def ],
    [ abc, def ],
    [ abcd, ef ]
  ]
*/