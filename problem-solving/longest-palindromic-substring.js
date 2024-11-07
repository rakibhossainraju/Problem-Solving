/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  let longest = s[0]; // Start with the first char as the longest palindrome.

  for (let i = 1; i < s.length; i++) {
    // Case 1: Check for even-length palindrome center between i - 1 and i;
    if (s[i - 1] === s[i]) {
      const palindrome = expandAroundCenter(s, i - 1, i);
      if (palindrome.length > longest.length) longest = palindrome;
    }

    // Case 2: Check for odd-length palindrome centerd at i;
    if (i + 1 < s.length && s[i - 1] === s[i + 1]) {
      const palindrome = expandAroundCenter(s, i - 1, i + 1);
      if (palindrome.length > longest.length) longest = palindrome;
    }
  }
  return longest;
};

function expandAroundCenter(str, left, right) {
  while (left >= 0 && right < str.length && str[left] === str[right]) {
    left--;
    right++;
  }
  return str.slice(left + 1, right);
}

// console.log(longestPalindrome("babad"));
// console.log(longestPalindrome("cbbd"));

const longestPalindromeDP = (s) => {
  const n = s.length;
  if (n < 2) return s;
  const dpTable = [];
  let maxLength = 1;
  let start = 0;
  for (let i = 0; i < n; i++) {
    let j = 0;
    dpTable[i] = [];
    while (j < n) {
      if (i === j) dpTable[i][j] = true;
      else dpTable[i][j] = false;
      j++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      dpTable[i][i + 1] = true;
      start = i;
      maxLength = 2;
    }
  }

  for (let k = 3; k <= n; k++) {
    for (let i = 0; i < n - k + 1; i++) {
      const j = i + k - 1;

      // If current substring is palindrome
      if (s[i] === s[j] && dpTable[i + 1][j - 1]) {
        dpTable[i][j] = true;
        start = i;
        maxLength = k;
      }
    }
  }

  return s.substring(start, start + maxLength);
};
// console.log(longestPalindromeDP('babad'))
