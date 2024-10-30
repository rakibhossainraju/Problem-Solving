const findTheSmallestStrAndFillWithZeros = <T extends string>(
  strA: T,
  strB: T,
): { strA: T; strB: T } => {
  if (strA.length === strB.length) return { strA, strB };

  let [longer, shorter] = strA.length > strB.length
    ? [strA, strB]
    : [strB, strA];

  const difference = Math.abs(strA.length - strB.length);
  shorter = "0".repeat(difference) + shorter as T; // Type assertion to maintain T type

  return {
    strA: strA.length > strB.length ? longer : shorter,
    strB: strA.length > strB.length ? shorter : longer,
  };
};

function addStrings(num1: string, num2: string): string {
  const { strA, strB } = findTheSmallestStrAndFillWithZeros(num1, num2);
  let sumStr = "";
  let carry = 0;
  let end = strA.length - 1;
  while (end >= 0) {
    const numOfA = parseInt(strA[end] ?? "");
    const numOfB = parseInt(strB[end] ?? "");
    let sum: string | number = numOfA + numOfB + carry;
    end--;
    // console.log(sum, >= 0)
    if (sum >= 10 && end === -1) {
      sumStr = sum.toString() + sumStr;
    } else if (sum >= 10) {
      sum = sum.toString();
      carry = parseInt(sum[0]);
      sumStr = sum[1] + sumStr;
    } else {
      carry = 0;
      sumStr = sum + sumStr;
    }
  }
  return sumStr;
}

// console.log(addStrings("123", "11")); //134
console.log(addStrings("9", "1")); //134
// console.log(
//   addStrings("9333852702227987", "85731737104263") === "9419584439332250",
// ); //134
