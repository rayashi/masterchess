import { createInitialBoard } from "../InitialBoard";

describe("Board", () => {

  it("should get initial board cells", async () => { 
    
    const boardCells = createInitialBoard();
    expect(boardCells[0][0].id).toBe("A8");
    expect(boardCells).toHaveLength(8);
    expect(boardCells[7]).toHaveLength(8);
    expect(/^[A-H][1-8]$/.test(boardCells[4][4].id)).toBeTruthy();
  });

});
