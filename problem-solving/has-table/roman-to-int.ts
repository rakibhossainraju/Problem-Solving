// https://leetcode.com/problems/roman-to-integer/

function romanToInt(s: string): number {
  const Symbols: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const Subtractions: Record<string, number> = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  let int = 0;
  let i = s.length - 1;
  while (i >= 0) {
    const currentChar = s[i];
    const charCombo = s[i - 1] + s[i];
    if (Subtractions[charCombo]) {
      int += Subtractions[charCombo];
      i -= 2;
    } else {
      int += Symbols[currentChar];
      i--;
    }
  }

  return int;
}

// console.log(romanToInt('III'));
// console.log(romanToInt('LVIII'));
console.log(romanToInt("MCMXCIV"));
