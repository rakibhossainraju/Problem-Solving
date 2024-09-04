/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let i = 0;
  let j = 0;
  while(i < haystack.length){
    const hayChar = haystack[i];
    const needleChar = needle[j];
    i++;
    if(hayChar === needleChar){
      if (j === needle.length - 1) return i - 1 - j;
      j++;
    } else {
      i = i - j;
      j = 0;
    }  
  }
  return -1;
};


// console.log(strStr('AAAAAAAAAAAAAAAAAB', 'AAAAB'));
// console.log('AAAAAAAAAAAAAAAAAB'.indexOf('AAAAB'));

const computeLPSArray = (str) => {
  const lpsTable = [0];
  let len = 0;
  let i = 1;
  while (i < str.length) {
    if(str[i] === str[len]){
      len++;
      lpsTable[i] = len;
      i++;
    } else {
      if(len !== 0){
        len = lpsTable[len - 1];
      } else {
        lpsTable[i] = 0;
        i++;
      }
    }
  }
  return lpsTable;
};
console.log(computeLPSArray("cbbd"));




// const computeLPSArray = (str) => {
//   const lpsTable = [0];
//   let i = 1;
//   let len = 0;
//   while (i < str.length) {
//     const charI = str[i]; // i = 1, a
//     const matchChar = str[len];
    
//     if (charI === matchChar) {
//       len++;
//       lpsTable.push(len);
//     } else {
//       len = 0;
//       lpsTable.push(len);
//     }
//     i++;
//   }
//   return lpsTable;
// };
// console.log(computeLPSArray("cbbd"));

const kmpAlogrithom = (haystack, needle) => {
  const lpsTable = computeLPSArray(needle);
  needle = " " + needle;
  let i = 0;
  let j = 0;
  while(i < haystack.length){
    if(haystack[i] === needle[j + 1]){
      i++;
      j++;
      if (j === needle.length - 1) return i - j;
    } else {
      if (j === 0) i++;
      else j = lpsTable[j - 1];
    }
  }

  return - 1;
};

// console.log(kmpAlogrithom('aabaaabaaac', 'aabaaac'))
// console.log(('aabaaabaaac'.indexOf('aabaaac')))