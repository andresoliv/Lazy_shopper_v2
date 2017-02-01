import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './app.global.css';

import { App } from './src/app';

const configureStore = require('./src/app/Store/configureStore');
const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);