// https://leetcode.com/problems/integer-to-roman/?envType=problem-list-v2&envId=hash-table

function intToRoman(num: number): string {
  const list: [number, string][] = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];
  let roman = "";
  for (const item of list) {
    while (num >= item[0]) {
      num -= item[0];
      roman += item[1];
    }
  }

  return roman;
}

// console.log(intToRoman(1994));
console.log(intToRoman(3749));
