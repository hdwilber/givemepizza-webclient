import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import Pizzas from './containers/Pizzas'
import RequestStatus from './containers/RequestStatus'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Pizzas />
        <RequestStatus />
      </div>
    </Provider>
  );
}

export default App;
