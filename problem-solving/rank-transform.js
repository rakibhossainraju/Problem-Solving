/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    const hashMap = new Map();
    arr.forEach(n => hashMap.set(n, 0));
    const uniqueNums = Array.from((hashMap.keys())).sort((a, b) => a - b);
    uniqueNums.forEach((num, i) => {
        hashMap.set(num, i + 1);
    })
    return arr.map(num => hashMap.get(num));
};

console.log(arrayRankTransform([37,12,28,9,100,56,80,5,12]))