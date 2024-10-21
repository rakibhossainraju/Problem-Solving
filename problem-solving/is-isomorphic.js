/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false; // If lengths are different, they're not isomorphic
    
    const mapS = {}; // Map for string s to string t
    const mapT = {}; // Map for string t to string s
    
    for(let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];
         let a = mapS[charS];
         let b = mapS[charS];
        // Check if there's already a mapping for charS in mapS
        if(mapS[charS] !== undefined && mapS[charS] !== charT) {
            return false; // If the current mapping doesn't match, they're not isomorphic
        }
        
        // Check if there's already a mapping for charT in mapT
        if(mapT[charT] !== undefined && mapT[charT] !== charS) {
            return false; // If the reverse mapping doesn't match, they're not isomorphic
        }
        
        // Set up the mapping in both maps
        mapS[charS] = charT;
        mapT[charT] = charS;
    }
    
    return true; // If no inconsistencies were found, they are isomorphic
};

console.log(isIsomorphic('egg', 'add'));
// console.log(isIsomorphic('paper', 'title'));
// console.log(isIsomorphic('abcdefghijklmnopqrstuvwxyzva', 'abcdefghijklmnopqrstuvwxyzck'));
// console.log(isIsomorphic('badc', 'baba'));
