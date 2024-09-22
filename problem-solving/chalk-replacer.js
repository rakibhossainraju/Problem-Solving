var chalkReplacer = function(chalk, k) {
    const totalChalk = chalk.reduce((sum, val) => sum + val, 0);
    k %= totalChalk;
    console.log(k)
    for (let i = 0; i < chalk.length; i++) {

        if (k < chalk[i]) {
            return i;
        }
        k -= chalk[i];
    }
};

console.log(chalkReplacer([5,1,5], 22));
console.log(chalkReplacer([3,4,1,2], 25));