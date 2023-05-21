import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import songsSlice from './store/songsSlice';

ReactDOM.render(
  <Provider store={songsSlice}>
    <App />
  </Provider>,
  document.getElementById('root')
);