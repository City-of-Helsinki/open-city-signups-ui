import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from './reducer';
import {apiMiddleware} from '../api/redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState = {}) {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(apiMiddleware)
    )
  );
}
