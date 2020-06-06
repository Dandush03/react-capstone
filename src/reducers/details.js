import * as types from '../actions/actionsType';

export default (state = '', action) => {
  switch (action.type) {
    case types.GET_COMPANIES_DETAILS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
