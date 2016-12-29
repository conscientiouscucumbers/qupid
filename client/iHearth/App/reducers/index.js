import { combineReducers } from 'redux';
import navReducer from './navReducer';
import couponReducer from './couponReducer';

const rootReducer = combineReducers({
  navReducer,
  couponReducer,
});

export default rootReducer;