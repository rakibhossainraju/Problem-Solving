function makeFancyString(s: string): string {
  let fancyStr = s[0];
  let prevChar = s[0];
  let count = 1;
  let i = 1;
  while (i < s.length) {
    console.log(count);
    if (s[i] === prevChar && count < 2) {
      count++;
      fancyStr += s[i];
    } else if (s[i] === prevChar) {
      count++;
    } else {
      count = 1;
      fancyStr += s[i];
    }
    prevChar = s[i];
    i++;
  }
  return fancyStr;
}

console.log(makeFancyString("leeetcode"));
console.log(makeFancyString("aaabaaaa"));
