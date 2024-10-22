/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    const hexTable = {
        10: 'A',
        11: 'B',
        12: 'C',
        13: 'D',
        14: 'E',
        15: 'F'
    }
    if (num < 0) {
        num += 2 ** 32;
    }

    const hex = [];
    const BASE_N = 16;
    if (num === 0) return "0";

    while(num > 0){
        hex.push(num % BASE_N);
        num = Math.floor(num / BASE_N)
    }
    let output = "";
    for(let i = hex.length - 1; i >= 0; i--){
        const code = hex[i];
        if(code in hexTable) output += hexTable[code].toLowerCase();
        else output += code;
    }
    return output;
};



/**
 * @param {number} num
 * @return {string}
 */
var toHexBitManipulation = function(num) {
    if (num < 0) {
        num += 2 ** 32;  // Adjust for two's complement
    }

    const hexChars = "0123456789abcdef";
    let result = '';

    do {
        const hexDigit = num & 0xF;  // Get last 4 bits
        result += hexChars[hexDigit]; // Append corresponding hex character
        num >>= 4;  // Right shift by 4 bits
    } while (num > 0);

    // The result is built in reverse order
    return result.split('').reverse().join('') || '0'; // Handle case for zero
    
};

// Example usage:
console.log(toHexBitManipulation(26));   // Output: "1a"
console.log(toHexBitManipulation(-1));   // Output: "ffffffff"
