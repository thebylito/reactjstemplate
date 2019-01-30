import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import AppRouter from './Navigation';
import configureStore, { history } from './store';

const { store, persistor } = configureStore();

const App = () => (
  <div className="App">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <AppRouter />
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  </div>
);

export default App;
