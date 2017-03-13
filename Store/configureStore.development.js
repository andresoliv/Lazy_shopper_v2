import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

const logger = createLogger({
  level: 'info',
  collapsed: true
})

const enhancer = compose(applyMiddleware(logger));

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
