import { combineReducers } from 'redux';
import navReducer from './navReducer';
import tabReducer from './tabReducer';
import loginNavReducer from './loginNavReducer';
import couponReducer from './couponReducer';

const rootReducer = combineReducers({
  navReducer,
  tabReducer,
  loginNavReducer,
  couponReducer,
});

export default rootReducer;