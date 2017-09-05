import { combineReducers } from 'redux';
import { subscribeReducer } from './_subscribe';
import { notificationReducer } from './_notification';

export default combineReducers({
  subscribe: subscribeReducer,
  notification: notificationReducer
});
