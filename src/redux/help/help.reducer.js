import HelpActionTypes from './help.types';

const INITIAL_STATE = {
  show: true
};

const helpReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HelpActionTypes.SET_HELP_STATUS:
      return {
        ...state,
        hidden: !state.show
      };
    default:
      return state;
  }
};

export default helpReducer;