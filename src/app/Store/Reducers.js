import { combineReducers } from 'redux';

import {
  appReducer as app,
} from '../reducers/index.js';

const rootReducer = combineReducers({
  app
});

export default rootReducer;
