// https://leetcode.com/problems/maximum-score-after-splitting-a-string/description/
function maxScore(s: string): number {
  const totalOnes = s.match(/1/g)?.length ?? 0;
  let leftZeros = 0;
  let leftOnes = 0;
  let maxScore = 0;
  for (let i = 0; i < s.length - 1; ++i) {
    if (s[i] === "0") leftZeros++;
    else leftOnes++;

    const rightOnes = totalOnes - leftOnes;
    const currentScore = leftZeros + rightOnes;
    maxScore = Math.max(maxScore, currentScore);
  }
  return maxScore;
}
