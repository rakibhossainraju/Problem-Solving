/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let lastCharCount = 0;
    let haveWeFoundChar = false;
    const sLength = s.length - 1;

    for (let i = sLength; i >= 0; i--) {
      const char = s[i];
      
      if(haveWeFoundChar && char === ' '){
        return lastCharCount;
      } 
      if(char !== ' '){
        lastCharCount++;
        haveWeFoundChar = true;
      }
    }
    return lastCharCount;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
console.log(lengthOfLastWord("y2"));
