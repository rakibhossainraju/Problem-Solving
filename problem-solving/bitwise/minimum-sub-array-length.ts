class BitwiseOrSubarrayCalculator {
  private readonly NOT_POSSIBLE_TO_CREATE_SUBARRAY = -1;
  private readonly TOTAL_BITS = 32;
  private readonly BITS = new Array<number>(this.TOTAL_BITS).fill(0);
  private valueBitwiseOR = 0;

  public minimumSubarrayLength(input: number[], target: number): number {
    let left = 0;
    let right = 0;
    let minLengthSubarray = Number.MAX_SAFE_INTEGER;

    while (right < input.length) {
      this.countSetBits(input[right]);

      while (left <= right && this.valueBitwiseOR >= target) {
        minLengthSubarray = Math.min(minLengthSubarray, right - left + 1);
        this.discountBits(input[left]);
        left++;
      }
      right++;
    }

    return (minLengthSubarray !== Number.MAX_SAFE_INTEGER)
      ? minLengthSubarray
      : this.NOT_POSSIBLE_TO_CREATE_SUBARRAY;
  }

  private countSetBits(num: number): void {
    this.valueBitwiseOR = this.valueBitwiseOR | num;

    for (let bitPosition = 0; bitPosition < this.TOTAL_BITS; ++bitPosition) {
      this.BITS[bitPosition] += ((num & (1 << bitPosition)) !== 0) ? 1 : 0;
    }
  }

  private discountBits(num: number): void {
    for (let bitPosition = 0; bitPosition < this.TOTAL_BITS; ++bitPosition) {
      this.BITS[bitPosition] -= ((num & (1 << bitPosition)) !== 0) ? 1 : 0;
      if (this.BITS[bitPosition] === 0) {
        this.valueBitwiseOR = this.valueBitwiseOR & (~(1 << bitPosition));
      }
    }
  }
}
const finder = new BitwiseOrSubarrayCalculator();
const minimumSubarrayLength = finder.minimumSubarrayLength.bind(finder);

console.log(minimumSubarrayLength([1, 2, 32, 21], 55));

// console.log(minimumSubarrayLength([1,2,3], 2));
// console.log(minimumSubarrayLength([2,1,8], 8));

// console.log(minimumSubarrayLength([5,1,32,86,2], 117));
// console.log(minimumSubarrayLength([2,1,6,32,86,56], 123));
