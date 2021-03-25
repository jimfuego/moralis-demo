import actions from '../actions/actions';

var initialState = {};

const modifyClientView = (state = initialState, action) => {
  let clone = Object.assign({}, state);
  switch (action.type) {
    case actions.SET_CLIENT_VIEW:
      clone = action.payload;
      return clone;
    case actions.CLEAR_CLIENT_VIEW:
      return {};
    default:
      return state;
  }
}

export default modifyClientView;