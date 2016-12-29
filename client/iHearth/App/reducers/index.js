import { combineReducers } from 'redux';
import navReducer from './navReducer';
import tabReducer from './tabReducer';
import couponReducer from './couponReducer';

const rootReducer = combineReducers({
  navReducer,
  tabReducer,
  couponReducer,
});

export default rootReducer;