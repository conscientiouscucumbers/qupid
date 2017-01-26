import { connect } from 'react-redux';
import ListView from '../components/ListView';
import { push, pop } from '../actions/nav-actions/navRootActions';
import { fetchPosts } from '../actions/listViewActions.js';
import { fetchCoupon } from '../actions/couponViewActions.js';
import { _handleNavigate } from '../lib/utils/navUtils';
import { sortCouponsBySavings, sortCouponsByDate } from '../actions/listViewActions.js';

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
    fetchCoupons: (user_id) => dispatch(fetchPosts(user_id)),
    fetchCoupon: (coupon_id) => dispatch(fetchCoupon(coupon_id)),
    sortCouponsBySavings: () => dispatch(sortCouponsBySavings()),
    sortCouponsByDate: () => dispatch(sortCouponsByDate()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListView);