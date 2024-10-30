function isHappy(n: number): boolean {
  type SingleNumber = {
    [key: string]: boolean;
  };
  const singleNumber: SingleNumber = {
    0: false,
    1: true,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: true,
    8: false,
    9: false,
  };

  if (n in singleNumber) return singleNumber[n];
  const memo: { [key: string]: number } = {};
  let temp = n;

  while (temp > 0) {
    if (temp in singleNumber) return singleNumber[temp];
    if (temp in memo) return false;
    let s = 0;
    for (const numChar of temp.toString()) {
      s += Math.pow(parseInt(numChar), 2);
    }
    memo[temp] = s;
    temp = s;
  }

  return true;
}

// console.log(isHappy(19));
// console.log(isHappy(289));
