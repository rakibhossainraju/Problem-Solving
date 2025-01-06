// https://leetcode.com/problems/peak-index-in-a-mountain-array/description/

function peakIndexInMountainArray(arr: number[]): number {
  let maxNum = arr[0];
  let peakIndex = 0;
  let start = 1;
  let end = arr.length - 1;

  while (start <= end) {
    if (maxNum < arr[start]) {
      maxNum = arr[start];
      peakIndex = start;
    }
    if (maxNum < arr[end]) {
      maxNum = arr[end];
      peakIndex = end;
    }
    start++;
    end--;
  }

  return peakIndex;
}

// console.log(peakIndexInMountainArray([18, 29, 38, 59, 98, 100, 99, 98, 90]));

function binarySearch(arr: number[]): number {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] < arr[mid + 1]) left = mid + 1;
    else right = mid;
  }
  return left;
}

console.log(binarySearch([18, 29, 38, 59, 98, 100, 99, 98, 90]));
