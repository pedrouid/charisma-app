import { apiSubscribe } from '../helpers/api';
import { notificationShow } from './_notification';

// -- Constants ------------------------------------------------------------- //
const SUBSCRIBE_REQUEST = 'subscribe/SUBSCRIBE_REQUEST';
const SUBSCRIBE_SUCCESS = 'subscribe/SUBSCRIBE_SUCCESS';
const SUBSCRIBE_FAILURE = 'subscribe/SUBSCRIBE_FAILURE';

// -- Actions --------------------------------------------------------------- //
export const subscribeSubmit = email => dispatch => {
  dispatch({ type: SUBSCRIBE_REQUEST });
  apiSubscribe(email)
    .then(() => {
      dispatch({ type: SUBSCRIBE_SUCCESS });
      dispatch(
        notificationShow("Thanks! We've sent you a confirmation email.")
      );
    })
    .catch(() => {
      dispatch({ type: SUBSCRIBE_FAILURE });
      dispatch(notificationShow('Something went wrong, please try again.'));
    });
};

// -- Reducer --------------------------------------------------------------- //
const INITIAL_STATE = {
  fetching: false
};

export const subscribeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SUBSCRIBE_REQUEST:
      return {
        ...state,
        fetching: true
      };
    case SUBSCRIBE_SUCCESS:
    case SUBSCRIBE_FAILURE:
      return { ...state, fetching: false };
    default:
      return state;
  }
};
