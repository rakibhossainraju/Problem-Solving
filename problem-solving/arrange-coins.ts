function arrangeCoins(n: number): number {
    const staircase = Array.from({length: Math.round(n / 2)}, (element, index) => {
        const row = Array(index + 1)
        for(let i = 0; i < index + 1; i++) {
            if(n > 0) row[i] = true;
            n = n - 1;
        }
        return row;
    });
    let completeRowCount = 0;
    
    for(const stair of staircase){
        if(stair[stair.length - 1] !== undefined) completeRowCount++
    }
    return completeRowCount
};

console.log(arrangeCoins(5));
console.log(arrangeCoins(1804289383));
