
import * as ActionTypes from './actionsType';


function getCompaniesSuccess(json) {
  return {
    type: ActionTypes.GET_COMPANIES_SUCCESS,
    payload: json,
  };
}

function loadCompanySeccess(firstCompany, secondCompany) {
  return {
    type: ActionTypes.LOAD_COMPANIES_DATA,
    payload: {
      firstCompany,
      secondCompany,
    },
  };
}

function getCompaniesArray() {
  const fetchUrl = 'https://financialmodelingprep.com/api/v3/search?query=AA&limit=9999&exchange=NASDAQ&apikey=5a09cb0e52a6ec55120e0e6cccb75535';
  return dispatch => {
    dispatch({ type: ActionTypes.GET_COMPANIES_REQUEST });
    return fetch(fetchUrl)
      .then(response => response.json())
      .then(json => dispatch(getCompaniesSuccess(json)))
      // eslint-disable-next-line no-console
      .catch(error => console.log(error));
  };
}

function loadCompanyChart(firstCompany, secondCompany) {
  let first;
  let second;
  const fetchUrl = e => `https://financialmodelingprep.com/api/v3/historical-chart/4hour/${e}?apikey=5a09cb0e52a6ec55120e0e6cccb75535`;
  return dispatch => {
    dispatch({ type: ActionTypes.LOAD_COMPANY_REQUEST });
    return fetch(fetchUrl('AAPL'))
      .then(response => response.json())
      .then(json => {
        first = json;
      })
      .then(e => {
        fetch(fetchUrl('PRAA'))
          .then(response => response.json())
          .then(json => {
            second = json;
          })
          .then(() => dispatch(loadCompanySeccess(first, second)))
          // eslint-disable-next-line no-console
          .catch(error => console.log(error));
      })
      // eslint-disable-next-line no-console
      .catch(error => console.log(error));
  };
}

function selector(company, position) {
  return {
    type: ActionTypes.COMPANY_SELECTOR,
    payload: { company, position },
  };
}

export { getCompaniesArray, loadCompanyChart, selector };
