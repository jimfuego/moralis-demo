import actions from '../actions/actions';

var initialState = {
  visible: false,
  content: {},
};

const modifyPopupView = (state = initialState, action) => {
  let clone = Object.assign({}, state);
  let payload = action.payload;
  switch (action.type) {
    case actions.TOGGLE_POPUP:
      clone['visible'] = !clone['visible'];
      return clone;
    case actions.SET_POPUP_CONTENT:
      clone['content'] = payload;
      return clone;
    case actions.CLEAR_POPUP_CONTENT:
      return initialState;
    default:
      return state;
  }
}

export default modifyPopupView;