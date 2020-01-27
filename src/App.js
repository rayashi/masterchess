import React from "react";
import { Provider } from "react-redux";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import "./App.css";
import store from "./redux/store";

import Onboarding from "./onboarding/Onboarding";
import Game from "./game/Game";

function App() {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL;

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/">
            <Onboarding />
          </Route>
        </Switch>
      </Router>
    </Provider>

  );
}

export default App;
