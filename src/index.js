import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { AppContainer } from 'react-hot-loader';

import { AppRoot } from './containers/AppRoot';

import configureStore, { history } from './index.store';

const store = configureStore();

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router history={history}>
          <AppRoot />
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(AppRoot);

if (module.hot) {
  module.hot.accept('./containers/AppRoot', () => { render(AppRoot); });
}
