import { combineReducers } from 'redux';
import navReducer from './nav-reducers/navReducer';
import tabReducer from './nav-reducers/tabReducer';
import loginNavReducer from './nav-reducers/loginNavReducer';
import userReducer from './userReducer';
import couponReducer from './couponReducer';
import listReducer from './listReducer';
import loginReducer from './loginReducer';
import logoutReducer from './logoutReducer';
import signupReducer from './logoutReducer';
import QRReducer from './QRReducer';
import forgotPasswordReducer from './forgotPasswordReducer';
import historyReducer from './historyReducer';
import { USER_LOGOUT, CLEAR_QR_STATE } from '../constants/ActionTypes';

const appReducer = combineReducers({
  navReducer,
  tabReducer,
  loginNavReducer,
  userReducer,
  couponReducer,
  listReducer,
  loginReducer,
  logoutReducer,
  signupReducer,
  QRReducer,
  forgotPasswordReducer,
  historyReducer
});

// Ultimate reducer to reset state on logout
const rootReducer = (state, action) => {
  if (action.type === USER_LOGOUT) {
    state = undefined;
  }

  return appReducer(state, action);
}

export default rootReducer;
