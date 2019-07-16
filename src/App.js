import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import Pizzas from './containers/Pizzas'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Pizzas />
      </div>
    </Provider>
  );
}

export default App;
