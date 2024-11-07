function largestCombination(candidates: number[]): number {
  const ans: number[] = new Array(24).fill(0);

  for (const num of candidates)
   {
    console.log(num, num.toString(2));
    
    for (let bit = 0; bit < 24; bit++)
        if ((num & (1 << bit)) !== 0)
          ans[bit]++;
   }

  return Math.max(...ans);
}
 
console.log(largestCombination([1, 5, 3])); 
console.log(largestCombination([7, 7]));
console.log(largestCombination([16, 17, 71, 62, 12, 24, 14]));