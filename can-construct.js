const canConstruct = (target, wordBank) => {
  if(target.length === 0) return true;
  for(const subStr of wordBank){
    const subStrOfTarget = target.substr(0, subStr.length);
    if (subStrOfTarget === subStr) {
      const newTarget = target.slice(subStr.length, target.length);
      canConstruct(newTarget, wordBank)
    }
  }
  return false;
};
console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));