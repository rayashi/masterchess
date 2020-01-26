import React from "react";
import { Provider } from "react-redux";
import axios from "axios";

import "./App.css";
import store from "./redux/store";
import Board from "./board/Board";
import Menu from "./menu/Menu";

function App() {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL;

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
