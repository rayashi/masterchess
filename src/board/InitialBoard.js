export const createInitialBoard = () => {
  const rows = [8, 7, 6, 5, 4, 3, 2, 1];
  const columns = ["A", "B", "C", "D", "E", "F", "G", "H"];

  let initialCells = [];
  rows.map((row, rowIndex) => {
      let line = []; 
      columns.map((column, columnIndex) => {
          return line.push({
              id: `${column}${row}`, 
              rowIndex: rowIndex,
              columnIndex: columnIndex,
              className: (columnIndex+rowIndex)%2 ? "odd" : "even"
          });
      });
      return initialCells.push(line);
  });
  return initialCells;
}