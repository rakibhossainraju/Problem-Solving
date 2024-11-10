function minChanges(s: string): number {
  let changeCount = 0;
  for (let i = 0; i < s.length; i += 2) {
    if (s[i] !== s[i + 1]) changeCount++;
  }
  return changeCount;
}
console.log(minChanges("01001011"));
console.log(minChanges("0000"));
