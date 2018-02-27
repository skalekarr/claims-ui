import { createStore, applyMiddleware, combineReducers } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import createmiddlewareSaga from 'redux-saga';
import createHistory from 'history/createBrowserHistory';

import * as reducers from './reducers';
import sagas from './sagas';

export const history = createHistory();
const mwSaga = createmiddlewareSaga();
const mwLogger = createLogger();
const mwHistory = routerMiddleware(history);
const createStoreWithMiddleware = applyMiddleware(mwSaga, mwLogger, mwHistory);

const rootReducer = combineReducers({
  ...reducers,
  routing: routerReducer,
});

export default function configureStore(initialState) {
  const configuredStore = createStore(
    rootReducer,
    initialState,
    createStoreWithMiddleware,
  );

  mwSaga.run(sagas);

  return configuredStore;
}
