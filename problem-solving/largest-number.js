/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    if (original.length !== m * n) {
        return [];
    }

    const arr2d = Array.from({length: m}, () => Array(n).fill(0));
    let i = 0;
    for(const col of arr2d) {
        for(let j = 0; j < col.length; j++, i++) {
            col[j] = original[i];
        }
    }
    return arr2d;
};

// console.log(construct2DArray([1,2,3,4], 2, 2));
// console.log(construct2DArray([1,2,3], 1, 3));
// console.log(construct2DArray([2], 1, 1));
console.log(construct2DArray([3], 3, 1));