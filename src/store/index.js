// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const initState = {
  companies: [{}],
  selector:
    {
      first: {
        company: {},
      },
      second: {
        company: {},
      },
    },
  loadData: {
    firstCompany: { symbol: '', historical: [] },
    secondCompany: { symbol: '', historical: [] },
  },
  popUp: {
    show: false,
    data: {},
  },
  details: [],
  filter: 'all',
};

export default function configureStore() {
  const store = createStore(
    reducers,
    initState,
    composeWithDevTools(
      applyMiddleware(
        thunk,
      ),
    ),
  );
  return store;
}
