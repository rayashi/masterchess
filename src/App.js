import React from 'react';
import { Provider } from 'react-redux';

import './App.css';
import store from './redux/store';
import Board from './board/Board';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Board/>
      </div>
    </Provider>

  );
}

export default App;
