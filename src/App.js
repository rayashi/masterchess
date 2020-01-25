import React from "react";
import { Provider } from "react-redux";

import "./App.css";
import store from "./redux/store";
import Board from "./board/Board";
import Menu from "./menu/Menu";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Board/>
        <Menu/>
      </div>
    </Provider>

  );
}

export default App;
