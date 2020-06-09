import * as types from '../actions/actionsType';

export default (state = '', action) => {
  switch (action.type) {
    case types.LOAD_COMPANIES_DATA:
      return action.payload;
    default:
      return state;
  }
};
