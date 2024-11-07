function compressedString(word: string): string {
  let prevChar = word[0];
  let charCount = 1;
  let comp = "";

  for (let i = 1; i <= word.length; i++) {
    if (prevChar === word[i] && word[i] !== undefined) {
      if (charCount < 9) charCount++;
      else {
        comp += charCount.toString() + prevChar;
        charCount = 1;
      }
    } else {
      comp += charCount.toString() + prevChar;
      charCount = 1;
    }
    prevChar = word[i];
  }

  return comp;
}

console.log(compressedString("abcde"));
console.log(compressedString("aaaaaaaaaaaaaabb"));

function compress(chars: string[]): number {
  let prevChar = chars[0];
  let charCount = 1;
  let output = "";

  for (let i = 1; i <= chars.length; i++) {
    if (prevChar === chars[i] && chars[i] !== undefined) {
      charCount++;
    } else {
      if (charCount === 1) output += prevChar;
      else {
        output += prevChar + charCount.toString();
      }
      charCount = 1;
    }
    prevChar = chars[i];
  }
  for (let i = 0; i < output.length; i++) {
    chars[i] = output[i];
  }

  return output.length;
}

console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
console.log(
  compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]),
);
