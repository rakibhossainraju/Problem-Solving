const factorial = (n, memo = {}) => {
    if (n in memo) return memo[n];  
    if (n === 0 || n === 1) return 1;
    memo[n] = n * factorial(n - 1, memo); 
    return memo[n];
};

// console.log(factorial(10));

const tabulation = (n) => {
    const table = Array(n + 1).fill(0);
    table[0] = 1;
    table[1] = 1;

    for(let i = 2; i <= n; i++){
        table[i] = i * table[i - 1];
    }

    return table;
}

console.log(tabulation(5));
