import { combineReducers } from 'redux';
import navReducer from './nav-reducers/navReducer';
import tabReducer from './nav-reducers/tabReducer';
import loginNavReducer from './nav-reducers/loginNavReducer';
import userReducer from './userReducer';
import couponReducer from './couponReducer';
import listReducer from './listReducer';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';

const rootReducer = combineReducers({
  navReducer,
  tabReducer,
  loginNavReducer,
  userReducer,
  couponReducer,
  listReducer,
  loginReducer,
  signupReducer
});

export default rootReducer;