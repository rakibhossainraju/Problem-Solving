// https://leetcode.com/problems/count-vowel-strings-in-ranges/

function vowelStrings(words: string[], queries: number[][]): number[] {
  const vowels = new Set<Readonly<string>>(["a", "e", "i", "o", "u"]);
  let previousValue = 0;
  const prefixSum: number[] = Array.from({ length: words.length }, (_, i) => {
    if (i === 0) {
      previousValue =
        vowels.has(words[0][0]) && vowels.has(words[0][words[0].length - 1])
          ? 1
          : 0;
    } else {
      previousValue +=
        vowels.has(words[i][0]) && vowels.has(words[i][words[i].length - 1])
          ? 1
          : 0;
    }

    return previousValue;
  });
  const answer: number[] = [];
  for (const [li, ri] of queries) {
    const count = prefixSum[ri] - (li > 0 ? prefixSum[li - 1] : 0);
    answer.push(count);
  }

  return answer;
}
