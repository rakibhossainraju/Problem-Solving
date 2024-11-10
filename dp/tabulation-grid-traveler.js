const gridTraveler = (row, column) => {
  const gridTable = Array.from(
    { length: row + 1 },
    () => Array.from({ length: column + 1 }).fill(0),
  );

  // Starting point
  gridTable[1][1] = 1;

  let i = 0;
  let j = 0;

  while (i <= row) {
    const currentRow = gridTable[i];
    const bottomRow = gridTable[i + 1]; // Next row

    while (j < currentRow.length) {
      const val = currentRow[j];
      if (currentRow[j + 1] !== undefined) currentRow[j + 1] += val; // Move right
      if (bottomRow !== undefined && bottomRow[j] !== undefined) {
        bottomRow[j] += val; // Move down
      }

      j++;
    }

    i++;
    j = 0; // Reset j after finishing a row
  }

  return gridTable[row][column];
};

console.log(gridTraveler(18, 18)); // 2333505220
console.table(gridTraveler(4, 3)); //10
