// -- Constants ------------------------------------------------------------- //
const NOTIFICATION_SHOW = 'notification/NOTIFICATION_SHOW';
const NOTIFICATION_HIDE = 'notification/NOTIFICATION_HIDE';

// -- Actions --------------------------------------------------------------- //
export const notificationShow = message => dispatch => {
  dispatch({ type: NOTIFICATION_SHOW, payload: message });
  setTimeout(() => dispatch({ type: NOTIFICATION_HIDE }), 3000);
};

// -- Reducer --------------------------------------------------------------- //
const INITIAL_STATE = {
  show: false,
  message: ''
};

export const notificationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NOTIFICATION_SHOW:
      return {
        ...state,
        show: true,
        message: action.payload
      };
    case NOTIFICATION_HIDE:
      return { ...state, show: false, message: '' };
    default:
      return state;
  }
};
