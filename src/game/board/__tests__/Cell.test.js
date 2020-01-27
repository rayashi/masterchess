import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import configureStore from 'redux-mock-store';

import { createInitialBoard } from "../InitialBoard";
import Cell from "../Cell";
import { setKnight } from "../BoardActions";

const mockStore = configureStore([]);

describe("Cell", () => {
  const board = createInitialBoard();

  it("should render empty cell", async () => { 
    const store = mockStore({
      BoardReducer: {
        knight: null,
        moves: []
      }
    });
    const { container } = render(
      <Provider store={store}>
        <Cell cell={board[0][0]}/>
      </Provider>
    );
    expect(container.firstChild.classList.contains('cell')).toBe(true);
    expect(container.firstChild.classList.contains('even')).toBe(true);
  });

  it("should render knight cell", async () => { 
    const store = mockStore({
      BoardReducer: {
        knight: {id: "A8"},
        moves: []
      }
    });
    const { container } = render(
      <Provider store={store}>
        <Cell cell={board[0][0]}/>
      </Provider>
    );
    expect(container.firstChild.classList.contains('knightCell')).toBe(true);
  });

  it("should render highlighted cell", async () => { 
    const store = mockStore({
      BoardReducer: {
        knight: null,
        moves: ["C4", "B2"]
      }
    });
    const { container } = render(
      <Provider store={store}>
        <Cell cell={{id: "C4"}}/>
      </Provider>
    );
    expect(container.firstChild.classList.contains('highlightCell')).toBe(true);
  });

  it("should dispatch setKnight action", async () => { 
    const store = mockStore({
      BoardReducer: {
        knight: null,
        moves: []
      }
    });
    store.dispatch = jest.fn();

    const { container } = render(
      <Provider store={store}>
        <Cell cell={board[0][0]}/>
      </Provider>
    );
      
    fireEvent.click(container.firstChild);
    expect(store.dispatch).toHaveBeenCalledWith(
      setKnight(board[0][0])
    );
  });


});
