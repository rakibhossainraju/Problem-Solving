function myAtoi(s: string): number {
  const asciiCodes: { [key: number]: string } = {
    32: "space",
    43: "plus",
    45: "minus",
    66: "period",
  };
  const isDigit = (asciiCode: number): boolean =>
    asciiCode >= 48 && asciiCode <= 57;

  const INT_MIN = -Math.pow(2, 31);
  const INT_MAX = Math.pow(2, 31) - 1;

  let isBeaning = true;
  let isNegative = false;
  let output = "";

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const asciiCode = char.charCodeAt(0);

    // Ignore leading whitespace
    if (isBeaning && asciiCodes[asciiCode] === "space") {
      continue;
    }

    // Handle sign
    if (
      isBeaning &&
      (asciiCodes[asciiCode] === "minus" || asciiCodes[asciiCode] === "plus")
    ) {
      isNegative = asciiCodes[asciiCode] === "minus";
      isBeaning = false;
      continue;
    }

    // Read digits
    if (isDigit(asciiCode)) {
      isBeaning = false;
      if (char === "0" && output.length === 0) {
        continue; // Skip leading zeros
      } else {
        output += char; // Append the digit
      }
    } else if (!isBeaning) {
      break; // Break on first non-digit after reading digits
    } else {
      return 0; // No digits read
    }
  }

  // Handle the output conversion
  let outputNum = parseInt(output.length ? output : "0");
  if (isNegative) {
    outputNum = -outputNum;
  }

  // Clamp the output to the 32-bit signed integer range
  if (outputNum < INT_MIN) return INT_MIN;
  if (outputNum > INT_MAX) return INT_MAX;

  return outputNum;
}

// Test cases
console.log(myAtoi("-55.542")); // Output: -55
console.log(myAtoi("-042")); // Output: -42
console.log(myAtoi("   -042")); // Output: -42
console.log(myAtoi("1337c0d3")); // Output: 1337
console.log(myAtoi("0-1")); // Output: 0
console.log(myAtoi("-99999999-25345743489343434")); // Output: -99999999
console.log(myAtoi("  -1w337c0d3")); // Output: -1
