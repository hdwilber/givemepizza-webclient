import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import GiveMePizza from './containers'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <GiveMePizza />
    </Provider>
  );
}

export default App;
