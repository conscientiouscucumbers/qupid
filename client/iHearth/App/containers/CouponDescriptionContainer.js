import { connect } from 'react-redux';
import CouponDescriptionView from '../components/CouponDescriptionView';
import { fetchPosts } from '../actions/couponViewActions.js';
import { clearQRState } from '../actions/QRCodeViewActions';

function mapStateToProps(state) {
  return {
    couponInfo: state.couponReducer.couponInfo,
    items: state.couponReducer.items,
    isFetching: state.couponReducer.isFetching
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCoupons: () => dispatch(fetchCoupon()),
    clearQRState: () => dispatch(clearQRState())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CouponDescriptionView);
