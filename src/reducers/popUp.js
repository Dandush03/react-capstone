import * as types from '../actions/actionsType';

export default (state = '', action) => {
  switch (action.type) {
    case types.SHOW_POPUP:
      return action.payload;
    case types.CLOSE_POPUP:
      return action.payload;
    default:
      return state;
  }
};
