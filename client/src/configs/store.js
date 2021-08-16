import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

export const history = createBrowserHistory();

const rootReducer = {
  router: connectRouter(history),
};
const sagaMiddleware = createSagaMiddleware();
const middleware = [
  sagaMiddleware,
  routerMiddleware(history),
  ...getDefaultMiddleware({ thunk: false }),
];

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: true,
});
sagaMiddleware.run(rootSaga);

export default store;
