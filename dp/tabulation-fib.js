const fib = (num) => {
  const dpTable = new Array(num + 1).fill(0);
  dpTable[1] = 1;
  
  for (let i = 0; i <= num; i++){
    const val = dpTable[i];
    if(dpTable[i + 1] !== undefined) dpTable[i + 1] += val;
    if(dpTable[i + 2] !== undefined) dpTable[i + 2] += val;
  }
  return dpTable;
}
console.log(fib(1000));