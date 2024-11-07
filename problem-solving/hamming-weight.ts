function hammingWeight(n: number): number {
  const binary = n.toString(2);
  let count = 0;
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "1") {
      count++;
    }
  }
  return count;
}
console.log(hammingWeight(11)); // 3
