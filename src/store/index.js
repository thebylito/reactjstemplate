import { applyMiddleware, compose, createStore } from 'redux';
import storage from 'redux-persist/lib/storage';
import createHistory from 'history/createHashHistory';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import rootSaga from './sagas/index';
import reducers from './ducks/index';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
};

const history = createHistory({
  hashType: 'slash',
  getUserConfirmation: true,
});

const routeMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, routeMiddleware];
const persistedReducer = persistReducer(persistConfig, reducers(history));

const chooseStore = process.env.NODE_ENV === 'production'
  ? createStore
  : console.tron.createStore;

export default function configureStore(initialState) {
  const store = chooseStore(
    persistedReducer,
    initialState,
    compose(applyMiddleware(...middlewares)),
  );
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return { store, persistor };
}
export { history };
