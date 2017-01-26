import { connect } from 'react-redux';
import QRCodeImageView from '../components/QRCodeImageView';
import { useCoupon, fetchCoupon, clearQRState } from '../actions/QRCodeViewActions.js';
import { fetchPosts } from '../actions/listViewActions.js';

function mapStateToProps(state) {
  return {
    QRInfo: state.QRReducer,
    currentCoupon: state.couponReducer,
    userInfo: state.loginReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    useCoupon: (user_id, coupon_id) => { dispatch(useCoupon(user_id, coupon_id)) },
    fetchCoupon: (user_id, coupon_id) => { dispatch(fetchCoupon(user_id, coupon_id)) },
    fetchCoupons: (user_id) => { dispatch(fetchPosts(user_id)) },
    clearQRState: () => { dispatch(clearQRState()) },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QRCodeImageView);
