import { createInitialBoard } from "../InitialBoard";

describe("Board", () => {

  it("should get initial board cells", async () => { 
    
    const boardCells = createInitialBoard();
    expect(boardCells[0][0].id).toBe("A8");
    expect(boardCells).toHaveLength(8);
    expect(boardCells[7]).toHaveLength(8);
  });

});
