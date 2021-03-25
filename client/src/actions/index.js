import actions from './actions';

/*
 * Clear the current client in the store.
 */
export const clearClientView = () => {
  return {
    type: actions.SET_LOAN_VIEW
  }
}

/*
 * Sets client selected in the UI to the store. 
 */
export const setClientView = (client) => {
  return {
    type: actions.SET_LOAN_VIEW,
    payload: client
  }
}

/*
 * Sets client selected in the UI to the store. 
 */
export const setProfileView = (viewId) => {
  return {
    type: actions.SET_PROFILE_VIEW,
    payload: viewId
  }
}

export const togglePopup = () => {
  return {
    type: actions.TOGGLE_POPUP
  }
}

export const setPopupContent = () => {
  return {
    type: actions.SET_POPUP_CONTENT
  }
}