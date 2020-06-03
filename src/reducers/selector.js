import * as types from '../actions/actionsType';

let newState;

export default (state = '', action) => {
  switch (action.type) {
    case types.COMPANY_SELECTOR:
      newState = {
        ...state,
        [action.payload.position]: {
          code: action.payload.company,
        },
      };
      return newState;
    default:
      return state;
  }
};
