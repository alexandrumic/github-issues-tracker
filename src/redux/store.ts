import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './root-reducer';
import sagas from './root-saga';

const { createLogger } = require('redux-logger');

function configureStore(initialState?: any) {
  let middleware;
  const logger = createLogger({ collapsed: true });
  const sagaMiddleware = createSagaMiddleware();

  middleware = [sagaMiddleware];

  if (__DEV__) {
    middleware = middleware.concat([logger]);
  }

  // create store
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(...middleware),
  );

  sagaMiddleware.run(sagas);

  return store;
}

const store = configureStore();
export default store;
