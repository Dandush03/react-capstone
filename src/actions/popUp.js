import * as ActionTypes from './actionsType';

function handlePopUp(data, bool) {
  const NewState = {
    show: bool,
    data,
  };
  return {
    type: ActionTypes.SHOW_POPUP,
    payload: NewState,
  };
}

function handleClosePopUp() {
  const NewState = {
    show: false,
    data: {},
  };
  return {
    type: ActionTypes.CLOSE_POPUP,
    payload: NewState,
  };
}

export { handlePopUp, handleClosePopUp };
