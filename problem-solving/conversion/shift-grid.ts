function shiftGrid(grid: number[][], k: number): number[][] {
  const rowLength = grid[0].length;
  const totalElements = grid.length * rowLength;

  const flatArr: number[] = grid.reduce((acc, cur) => acc.concat(cur), []);

  k = k % totalElements;

  const shiftedArr = flatArr.slice(-k).concat(flatArr.slice(0, -k));

  return Array.from(
    { length: grid.length },
    (_, rowIndex) =>
      shiftedArr.slice(rowIndex * rowLength, (rowIndex + 1) * rowLength),
  );
}
console.log(shiftGrid([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 9));

/*
[
    [1,2,3],
    [4,5,6],
    [7,8,9]
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [9, 1, 2, 3, 4, 5, 6, 7, 8],
]
[
    [9, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
]
*/
