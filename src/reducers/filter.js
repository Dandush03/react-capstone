import * as types from '../actions/actionsType';

export default (state = '', action) => {
  switch (action.type) {
    case types.FILTER_COMPANIES:
      return action.payload;
    default:
      return state;
  }
};
