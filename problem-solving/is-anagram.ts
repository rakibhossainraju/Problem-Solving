function isAnagram(s: string, t: string): boolean {
  if (s.length > t.length || t.length > s.length) return false;
  const frequencyMapS: Map<string | number, number> = new Map();
  const frequencyMapT: Map<string | number, number> = new Map();

  for (const char of s) {
    if (!frequencyMapS.has(char)) frequencyMapS.set(char, 1);
    else frequencyMapS.set(char, (frequencyMapS.get(char) ?? 0) + 1);
  }
  for (const char of t) {
    if (!frequencyMapT.has(char)) frequencyMapT.set(char, 1);
    else frequencyMapT.set(char, (frequencyMapT.get(char) ?? 0) + 1);
  }
  for (const [key, val] of frequencyMapT) {
    if (!frequencyMapS.has(key)) return false;
    if (frequencyMapS.get(key) !== val) return false;
  }

  return true;
}

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
