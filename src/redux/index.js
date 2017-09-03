import { combineReducers } from 'redux';
import { subscribeReducer } from './_subscribe';

export default combineReducers({
  subscribe: subscribeReducer
});
