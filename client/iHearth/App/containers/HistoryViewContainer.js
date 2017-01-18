import { connect } from 'react-redux';
import HistoryView from '../components/HistoryView';
import { push, pop } from '../actions/nav-actions/navRootActions';
import { fetchAllCoupons } from '../actions/historyViewActions.js';
import { fetchCoupon } from '../actions/couponViewActions.js';
import { _handleNavigate } from '../lib/utils/navUtils';
import {
  sortCouponsBySavings,
  sortCouponsByDate,
  sortCouponsByTimeLeft,
  // sortCouponsByUsed,
  // sortCouponsByExpired,
  // sortCouponsByActivated
} from '../actions/historyViewActions.js';

function mapStateToProps(state) {
  return {
    coupons: state.listReducer,
    userInfo: state.loginReducer,
    pushedCoupons: state.tabReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pushRoute: (route) => dispatch(push(route)),
    popRoute: () => dispatch(pop()),
    fetchCoupons: (user_id) => dispatch(fetchAllCoupons(user_id)),
    fetchCoupon: (coupon_id) => dispatch(fetchCoupon(coupon_id)),
    sortCouponsBySavings: () => dispatch(sortCouponsBySavings()),
    sortCouponsByDate: () => dispatch(sortCouponsByDate()),
    sortCouponsByTimeLeft: () => dispatch(sortCouponsByTimeLeft()),
    // sortCouponsByUsed: () => dispatch(sortCouponsByUsed()),
    // sortCouponsByExpired: () => dispatch(sortCouponsByExpired()),
    // sortCouponsByActivated: () => dispatch(sortCouponsByActivated()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryView);
