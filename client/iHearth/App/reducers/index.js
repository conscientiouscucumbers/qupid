import { combineReducers } from 'redux';
import navReducer from './nav-reducers/navReducer';
import tabReducer from './nav-reducers/tabReducer';
import loginNavReducer from './nav-reducers/loginNavReducer';
import couponReducer from './couponReducer';

const rootReducer = combineReducers({
  navReducer,
  tabReducer,
  loginNavReducer,
  couponReducer,
});

export default rootReducer;