import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import reducer from './reducers';
import {loadState, saveState} from './LocalStorage'


const immutableState = {
  "myList": {
    "courage": [],
    "woody": [],
    "ranger": []
  }
}
let initialState;

if(!loadState()){
  initialState = immutableState;
} else {
  initialState = loadState();
}

const store = createStore(reducer, initialState)

store.subscribe( () => {
  saveState(store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
