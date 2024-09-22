const canConstruct = (targetStr, wordBank) => {
  const table = Array(targetStr.length + 1).fill(false);
  table[0] = true;
   
  for(let i = 0; i <= targetStr.length; i++){

    if(table[i]) {
      for(const word of wordBank){
        const prefix = targetStr.slice(i, i + word.length);

        if(word === prefix) {
          table[i + word.length] = true;
        }
      }
    }
  }
  return table;
}
console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))