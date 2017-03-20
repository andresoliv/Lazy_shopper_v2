import { combineReducers } from 'redux';

import {
  appReducer as app,
} from '../reducers/app.reducer.js';

const rootReducer = combineReducers({
  app
});

export default rootReducer;
