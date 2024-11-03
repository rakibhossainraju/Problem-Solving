function isCircularSentence(sentence: string): boolean {
  const splittedSentence = sentence.split(" ");
  for (const [index, word] of splittedSentence.entries()) {
    if (splittedSentence[index + 1] !== undefined) {
      if (word[word.length - 1] !== splittedSentence[index + 1][0]) {
        return false;
      }
    }
  }
  const firstWord = splittedSentence[0];
  const lastWord = splittedSentence[splittedSentence.length - 1];
  if (firstWord[0] !== lastWord[lastWord.length - 1]) return false;
  
  return true;
}

console.log(isCircularSentence("leetcode exercises sound delightful"));
