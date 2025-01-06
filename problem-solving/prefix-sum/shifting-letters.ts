// https://leetcode.com/problems/shifting-letters/

function shiftingLetters(s: string, shifts: number[]): string {
  let totalShift = 0;
  const result: string[] = Array.from({ length: s.length });

  for (let i = shifts.length - 1; i >= 0; i--) {
    totalShift += shifts[i];
    let charCode = s.charCodeAt(i) + totalShift;
    if (charCode >= 122) charCode = (charCode - 97) % 26 + 97;
    result[i] = String.fromCharCode(charCode);
  }

  return result.join("");
}

console.log(shiftingLetters("abc", [3, 5, 9])); // Output: "rpl"
console.log(shiftingLetters("aaa", [1, 2, 3])); // Output: "gfd"
console.log(shiftingLetters("ruu", [26, 9, 17])); // Output: "rul"
