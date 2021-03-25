import actions from '../actions/actions';

var initialState = {
  viewId: 0,
};

const modifyProfileView = (state = initialState, action) => {
  let clone = Object.assign({}, state);
  let payload = action.payload;
  switch (action.type) {
    case actions.SET_PROFILE_VIEW:
      clone['viewId'] = payload;
      return clone;
    default:
      return state;
  }
}

export default modifyProfileView;