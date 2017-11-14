import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from "./components/root";
import {stepsByTodoId} from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore;
  ReactDOM.render(<Root store={ store } />, rootEl);

  window.store = store;
  window.stepsByTodoId = stepsByTodoId;
});
