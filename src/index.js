import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';

import AppRoot from './containers/AppRoot';

import configureStore, { history } from './index.store';

const store = configureStore();

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Component />
          </ConnectedRouter>
        </Provider>
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(AppRoot);

if (module.hot) {
  module.hot.accept('./containers/AppRoot', () => { render(AppRoot); });
}
