/**
 * COntains reducers used to manage Redux store.
 */
import modifyClientView from './clientView';
import profileView from './profileView'
import popupView from './popupView';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  clientView: modifyClientView,
  popupView: popupView,
  profileView: profileView
});

export default rootReducer;



