import { combineReducers } from 'redux';
import navReducer from './nav-reducers/navReducer';
import tabReducer from './nav-reducers/tabReducer';
import loginNavReducer from './nav-reducers/loginNavReducer';
import couponReducer from './couponReducer';
import listReducer from './listReducer';

const rootReducer = combineReducers({
  navReducer,
  tabReducer,
  loginNavReducer,
  couponReducer,
  listReducer
});

export default rootReducer;