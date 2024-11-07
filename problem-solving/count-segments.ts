function countSegments(s: string): number {
  if (!s.length) return 0;
  const output = [];
  let tempStr = "";

  for (const char of s) {
    if (char === " ") {
      if (tempStr.length) output.push(tempStr);
      tempStr = "";
    } else {
      tempStr += char;
    }
  }
  if (tempStr.length) output.push(tempStr);
  return output.length;
}

console.log(countSegments("Hello, my name is John"));
console.log(countSegments("   Hello    "));
console.log(countSegments("                "));
