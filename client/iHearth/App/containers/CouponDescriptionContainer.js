import { connect } from 'react-redux';
import CouponDescriptionView from '../components/CouponDescriptionView';
import { fetchPosts } from '../actions/couponViewActions.js';

function mapStateToProps(state) {
  return {
    couponInfo: state.couponReducer.couponInfo,
    items: state.couponReducer.items,
    isFetching: state.couponReducer.isFetching
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCoupons: () => dispatch(fetchPosts())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CouponDescriptionView);
