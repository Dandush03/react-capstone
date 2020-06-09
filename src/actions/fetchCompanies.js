
import * as ActionTypes from './actionsType';


function getCompaniesSuccess(json) {
  return {
    type: ActionTypes.GET_COMPANIES_SUCCESS,
    payload: json,
  };
}

function getCompaniesDetailsSuccess(json) {
  return {
    type: ActionTypes.GET_COMPANIES_DETAILS_SUCCESS,
    payload: json,
  };
}

function filterCompanies(name) {
  return {
    type: ActionTypes.FILTER_COMPANIES,
    payload: name,
  };
}

function loadCompanySuccess(firstCompany, secondCompany) {
  return {
    type: ActionTypes.LOAD_COMPANIES_DATA,
    payload: {
      firstCompany,
      secondCompany,
    },
  };
}

function getCompaniesArray() {
  const fetchUrl = 'https://financialmodelingprep.com/api/v3/search?query=AA&limit=9999&exchange=NASDAQ&apikey=ddb056dfeecb93aaa20254b2abff4887';
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
  const fetchUrl = e => `https://financialmodelingprep.com/api/v3/historical-price-full/${e}?apikey=ddb056dfeecb93aaa20254b2abff4887`;
  return dispatch => {
    dispatch({ type: ActionTypes.LOAD_COMPANY_REQUEST });
    Promise.all([fetch(fetchUrl(firstCompany)), fetch(fetchUrl(secondCompany))])
      .then(async ([firstResponse, secondResponse]) => {
        const first = await firstResponse.json();
        const second = await secondResponse.json();
        return [first, second];
      })
      .then(async ([firstJson, secondJson]) => {
        const first = await firstJson;
        const second = await secondJson;
        return dispatch(loadCompanySuccess(first, second));
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


function getDetails(company) {
  const fetchUrl = `https://financialmodelingprep.com/api/v3/profile/${company}?apikey=e4d3e8c9dea47067b790bcb8fc95ec61`;

  return dispatch => {
    dispatch({ type: ActionTypes.GET_COMPANY_DETAILS });
    return fetch(fetchUrl)
      .then(response => response.json())
      .then(json => dispatch(getCompaniesDetailsSuccess(json)))
    // eslint-disable-next-line no-console
      .catch(error => console.log(error));
  };
}

export {
  getCompaniesArray, loadCompanyChart, selector, getDetails, filterCompanies,
};
