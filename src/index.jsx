import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import storeConfig from './store';

import Home from './containers/Home';

import './stylesheets/index.scss';

const store = storeConfig();


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/hello" render={() => ('heelo')} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root'),
);
