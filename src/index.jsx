import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import storeConfig from './store';

import Home from './components/Home';
import Compare from './components/Compare';
import CompanyDetails from './components/Company';

import './stylesheets/index.scss';

const store = storeConfig();


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/compare" render={() => <Compare />} />
        <Route path="/company/:symbol" render={props => <CompanyDetails symbol={props.match.params.symbol} />} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root'),
);
